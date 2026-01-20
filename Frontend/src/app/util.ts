export function unixToDateString(unix_timestamp: number): string {
    var date = new Date(unix_timestamp * 1000);
    var return_string = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    return return_string;
}