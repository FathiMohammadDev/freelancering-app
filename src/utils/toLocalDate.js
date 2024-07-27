export function toLocalDate(date) {
    return new Date(date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"},)
}