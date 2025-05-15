export function Card({ children, className }: any) {
  return <div className={className}>{children}</div>;
}

export function CardContent({ children }: any) {
  return <div>{children}</div>;
}
