export const visibleDate = (state, {searchTerm, startDate, endDate}) => {
  return state.filter((transaction) => {
    const startDateMatch = typeof startDate !== 'number' || transaction.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || transaction.createdAt <= endDate;
    const searchTermMatch = transaction.title.includes(searchTerm);

    return startDateMatch && endDateMatch && searchTermMatch;

  });
}