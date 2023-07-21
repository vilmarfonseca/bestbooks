export interface SidebarItemProps {
  className?: string
  displayName: string
  href?: string
  icon?: React.ReactNode
  itemKey?: string | undefined
  onClick?: () => void
}