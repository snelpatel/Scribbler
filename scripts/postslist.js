//search the modals and obtain the reference here
var deletePostModal = document.getElementById("deletePostModal");
var cancelDelete = document.getElementById("cancelDelete");
var confirmDelete = document.getElementById("confirmDelete");

//search for the delete icons that opened the modal
var deleteIcons = document.querySelectorAll(".delete-icon");
var deleteIconsArray = Array.from(deleteIcons);

//delete the seleted post
var selectedPost;
openDeletePostModal = (deletePostModal, clickedIcon) => {
  selectedPost = "";
  openModal(deletePostModal);
  selectedPost = clickedIcon.closest(".post");
};

deletePost = () => {
  selectedPost.remove();
  closeModal(deletePostModal);
};

//Event handlers
deleteIconsArray.map(deleteIcon => {
    deleteIcon.addEventListener("click", e =>
      openDeletePostModal(deletePostModal, e.target)
    );
});

window.addEventListener("click", function(event) {
    if (event.target == deletePostModal) {
      deletePostModal.style.display = "none";
    }
});

cancelDelete.addEventListener("click", () => closeModal(deletePostModal));
confirmDelete.addEventListener("click", () => deletePost());

//search the dots
var dots = document.querySelectorAll(".dots");
var dotsArray = Array.from(dots);

dotsArray.map(dot => {
    dot.addEventListener("click", e => navigateToPost(e.target));
});

navigateToPost = postThread => {
    window.location.href = "../html/post.html";
};
