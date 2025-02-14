

export function CustomLocationCategory(type: string, text: string | number , navigate : (newUrl: string) => void) {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set(type, String(text));
    const newSearch = "?" + queryParams.toString();
    const newUrl = location.pathname  + newSearch;

    // Программное перенаправление на новый URL
    navigate(newUrl);
}