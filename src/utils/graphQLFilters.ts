import { FilterPriority, FilterType } from "@/types/filters";

export function getCategoryByType(type: FilterType) {
  if(type === FilterType.MUG) return "mugs"
  if(type === FilterType.SHIRT) return "t-shirts"
  return ""
}

export function getFieldByPriority(priority: FilterPriority) {
  if(priority === FilterPriority.NEWS)  return {field: "created_at", order: "DSC"}
  if(priority === FilterPriority.BIGGEST_PRICE) return {field: "price_in_cents", order: "DSC"}
  if(priority === FilterPriority.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
  return {field: "sales", order: "DSC"}
}

export const mountQuery = (type: FilterType, priority: FilterPriority) => {
  if(type === FilterType.ALL && priority === FilterPriority.POPULARITY) return `query {
      allProducts(sortField: "sales", sortOrder: "DSC") {
        id
        name
        price_in_cents
        image_url
      }
    }
  `
  const sortSettings = getFieldByPriority(priority)
  const categoryFilter = getCategoryByType(type)
  return `
  query {
      allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
        id
        name
        price_in_cents
        image_url
        category
      }
    }
  `
}