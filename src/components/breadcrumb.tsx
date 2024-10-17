import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

export function PageBreadcrub({ items }: any) {
  return (
    <Breadcrumb className="mb-3">
      <BreadcrumbList>
        {items.map((item: any, index: number) => {
          return (
            <BreadcrumbItem key={item.url + item.name}>
              {item.url ? (
                <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              )}
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
