import API from "./utils";
import { Category as ICategory } from "~/types";

type Category = {
    categories: Array<ICategory>;
};

function addLink(categories: ICategory[]): ICategory[] {
    return categories.map(category => {
        return !category.subItems
            ? { ...category, to: `/articles?category=${category.id}` }
            : {
                  ...category,
                  to: `/articles?category=${category.id}`,
                  subItems: addLink(category.subItems),
              };
    });
}

export function getCategories() {
    return API.get<Category>(`/categories`)
        .then(res => res.data)
        .then(({ categories }) => {
            return { categories: addLink(categories) };
        });
}

export function updateArticle(category: ICategory) {
    return API.patch<ICategory>(`/categories/${category.id}`, { category });
}

export function deleteCategory(category: ICategory) {
    return API.delete<null>(`/categories/${category.id}`);
}

export function createCategory(category: ICategory) {
    return API.post<ICategory>(`/articles`, { category });
}
