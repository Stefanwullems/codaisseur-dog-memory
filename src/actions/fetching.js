export function completedFetch() {
  return {
    type: "FETCH_COMPLETED"
  };
}

export function startFetching() {
  return {
    type: "FETCHING"
  };
}
