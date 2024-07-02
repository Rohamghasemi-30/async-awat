let container = document.querySelector(".container");
let containerSeconde = document.querySelector(".container-email");
async function getData() {
    let url = "https://jsonplaceholder.typicode.com/users";

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("نمیتوانید به سرور وصل شوید لطفا دوباره امتحان کنید");
        }

        let commentsList = await response.json();
        renderInUi(commentsList, container, containerSeconde);
    } catch (error) {}
}

getData();

function renderInUi(list, container) {
    document.querySelector(".loader").style.display = "none"
    list.forEach(item => {


        let div = document.createElement("div");
        div.classList = "div"
        div.innerText = item.name;


        let div2 = document.createElement("div");
        div2.classList = "div2"
        div2.innerText = item.email;
        let innerCintainer = document.createElement("div");


        innerCintainer.appendChild(div);
        containerSeconde.appendChild(div2);
        container.appendChild(innerCintainer);
    });
};