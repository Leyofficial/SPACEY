

export function useLocationCategory(type: string, text: string , navigate : (newUrl: string) => void) {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set(type, text);
    const newSearch = "?" + queryParams.toString();
    const newUrl = location.pathname + newSearch;

    // Программное перенаправление на новый URL
    navigate(newUrl);
}