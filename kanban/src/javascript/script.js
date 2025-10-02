document.querySelectorAll(".kanban-card").forEach(card => {
    card.addEventListener('dragstart', e =>{

        e.currentTarget.classList.add('dragging');

    })
    card.addEventListener('dragend', e =>{

        e.currentTarget.classList.remove('dragging');

    })

});

document.querySelectorAll('.kanban-column').forEach(column => {
    column.addEventListener('dragover', e => {
        const dragCard = document.querySelector('.kanban-card.dragging');
        e.currentTarget.appendChild(dragCard);
        
    })
})
    
document.querySelectorAll('.add-card').forEach(column =>{
    column.addEventListener("click", e =>{
        let prioridade = window.prompt("Prioridade da tarefa");
        let tarefa = window.prompt("Adicione uma tarefa");
       if(prioridade ==null || tarefa == null || prioridade == "" || tarefa == ""){
        console.log(prioridade)
        console.log(tarefa)
       }else{
         const card = document.createElement('div');
        card.classList.add("kanban-card");
        card.draggable=true;
        card.innerHTML = `
                <div class="bagde high">
                    <span>
                        ${prioridade}
                    </span>
                </div>
                <p class="card-title">
                    ${tarefa}
                </p>
                <div class="card-info">
                    <div class="card-icons">
                        <p>
                            <i class="fa-solid fa-x"></i>
                        </p>
                    </div>
                    <div class="user">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28rosto%29.jpg/960px-Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28rosto%29.jpg" alt="">
                    </div>
                </div>
            `
            card.addEventListener('dragstart', e =>{

                e.currentTarget.classList.add('dragging');

            })
            card.addEventListener('dragend', e =>{

                e.currentTarget.classList.remove('dragging');

            })
            let target = e.currentTarget.closest(".kanban-column");
            target.appendChild(card);
            document.querySelector(".fa-x").addEventListener("click", e=>{
                e.currentTarget.closest(".kanban-card").remove();

            })
       }
    })
})

