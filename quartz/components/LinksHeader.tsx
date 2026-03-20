import { resolveRelative, FullSlug } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const LinksHeader: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <div class={`links-header ${displayClass ?? ""}`}>
        {Object.entries(links).map(([text, slug]) => (
          <a
            href={resolveRelative(fileData.slug!, slug as FullSlug)}
            class="links-header-item"
          >
            {text}
          </a>
        ))}
      </div>
    )
  }

  LinksHeader.css = `
.links-header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}
.links-header-item {
  font-size: 0.85rem;
  padding: 0.25rem 0.6rem;
  border-radius: 0.4rem;
  background: var(--highlight);
  color: var(--secondary);
  text-decoration: none;
  white-space: nowrap;
}
.links-header-item:hover {
  background: var(--secondary);
  color: var(--light);
}
`

  return LinksHeader
}) satisfies QuartzComponentConstructor
