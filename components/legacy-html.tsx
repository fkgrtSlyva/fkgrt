"use client";

import { useEffect } from "react";

function getDirectElement(root: HTMLElement, selector: string) {
  return Array.from(root.children).find(
    (child): child is HTMLElement => child instanceof HTMLElement && child.matches(selector),
  ) || null;
}

function getDirectElements(root: HTMLElement) {
  const list = getDirectElement(root, ".resp-tabs-list, .menu");
  const container = getDirectElement(root, ".resp-tabs-container");
  if (!list || !container) return null;

  const tabs = Array.from(list.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
  const panels = Array.from(container.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
  const count = Math.min(tabs.length, panels.length);

  if (count < 1) return null;
  return {
    container,
    list,
    panels: panels.slice(0, count),
    tabs: tabs.slice(0, count),
  };
}

function activateLegacyTabs(root: HTMLElement, rootIndex: number) {
  const tabSet = getDirectElements(root);
  if (!tabSet) return () => {};

  const { container, list, panels, tabs } = tabSet;
  const cleanup: Array<() => void> = [];

  root.classList.add("legacy-tabs-ready");
  list.setAttribute("role", "tablist");
  if (root.classList.contains("vertical")) {
    list.setAttribute("aria-orientation", "vertical");
  }

  const activate = (activeIndex: number, focus = false) => {
    tabs.forEach((tab, index) => {
      const panel = panels[index];
      const isActive = index === activeIndex;

      tab.classList.toggle("resp-tab-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;

      panel.classList.toggle("resp-tab-content-active", isActive);
      panel.hidden = !isActive;
      panel.setAttribute("aria-hidden", String(!isActive));
    });

    if (focus) tabs[activeIndex]?.focus();
  };

  tabs.forEach((tab, index) => {
    const panel = panels[index];
    const tabId = tab.id || `legacy-tab-${rootIndex}-${index}`;
    const panelId = panel.id || `legacy-panel-${rootIndex}-${index}`;

    tab.id = tabId;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", panelId);

    panel.id = panelId;
    panel.classList.add("resp-tab-content");
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tabId);

    const onClick = (event: MouseEvent) => {
      event.preventDefault();
      activate(index);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const lastIndex = tabs.length - 1;
      const previous = index === 0 ? lastIndex : index - 1;
      const next = index === lastIndex ? 0 : index + 1;

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        activate(previous, true);
      }

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        activate(next, true);
      }

      if (event.key === "Home") {
        event.preventDefault();
        activate(0, true);
      }

      if (event.key === "End") {
        event.preventDefault();
        activate(lastIndex, true);
      }
    };

    tab.addEventListener("click", onClick);
    tab.addEventListener("keydown", onKeyDown);
    cleanup.push(() => {
      tab.removeEventListener("click", onClick);
      tab.removeEventListener("keydown", onKeyDown);
    });
  });

  const initialIndex = Math.max(
    tabs.findIndex((tab) => tab.classList.contains("resp-tab-active")),
    0,
  );
  activate(initialIndex);

  return () => {
    cleanup.forEach((removeListener) => removeListener());
    root.classList.remove("legacy-tabs-ready");
  };
}

export function LegacyTabsEnhancer({ routeKey }: { routeKey: string }) {
  useEffect(() => {
    const cleanup = Array.from(
      document.querySelectorAll<HTMLElement>(".legacy-html .responsive-tabs"),
    ).map((root, index) => activateLegacyTabs(root, index));

    return () => {
      cleanup.forEach((remove) => remove());
    };
  }, [routeKey]);

  return null;
}
