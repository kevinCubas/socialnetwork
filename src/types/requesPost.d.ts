interface IRequesPost {
  count: number,
  next: string | null,
  previous: string | null
  results: [IPost]
}