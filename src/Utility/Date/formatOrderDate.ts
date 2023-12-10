export function formatOrderDate(inputDate: Date | undefined): string {
    if (!inputDate) return 'unknown'
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const day = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Pad single-digit day and minutes with leading zero
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedDate = `${formattedDay} ${month} , ${year} at ${hours % 12}:${formattedMinutes} ${ampm}`;

    return formattedDate;
}