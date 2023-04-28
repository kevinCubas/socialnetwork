interface IModalState {
  isEditOpen: boolean;
  isDeleteOpen: boolean;
  postId: number | null;
  post: IPost | null;
}