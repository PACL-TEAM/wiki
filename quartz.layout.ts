import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "PAC Lab": "https://sites.google.com/view/pacl/",
      GitHub: "https://github.com/pacl-wiki",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.LinksHeader({
      links: {
        Tags: "tags/index",
        Concepts: "tags/concept/index",
        Papers: "tags/paper/index",
      },
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const order: Record<string, number> = {
          foundations: 0,
          sca: 1,
          pqc: 2,
          pet: 3,
          security: 4,
          quantum: 5,
          guides: 6,
          resources: 7,
        }
        if (a.isFolder && b.isFolder) {
          const aOrder = order[a.slugSegment] ?? 99
          const bOrder = order[b.slugSegment] ?? 99
          if (aOrder !== bOrder) return aOrder - bOrder
        }
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        return a.isFolder ? -1 : 1
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.LinksHeader({
      links: {
        Tags: "tags/index",
        Concepts: "tags/concept/index",
        Papers: "tags/paper/index",
      },
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const order: Record<string, number> = {
          foundations: 0,
          sca: 1,
          pqc: 2,
          pet: 3,
          security: 4,
          quantum: 5,
          guides: 6,
          resources: 7,
        }
        if (a.isFolder && b.isFolder) {
          const aOrder = order[a.slugSegment] ?? 99
          const bOrder = order[b.slugSegment] ?? 99
          if (aOrder !== bOrder) return aOrder - bOrder
        }
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        return a.isFolder ? -1 : 1
      },
    }),
  ],
  right: [],
}
