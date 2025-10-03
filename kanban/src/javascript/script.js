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
        let tarefa = window.prompt("Descrição da tarefa");
        if(prioridade !=null || tarefa != null || prioridade != "" || tarefa != ""){
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
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s" alt="">
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
                remover();
        }else{
            
            }
    })
    console.log("terminou")
})

function remover(){

    document.querySelectorAll(".fa-x").forEach(x =>{
    x.addEventListener("click", e=>{
        e.currentTarget.closest(".kanban-card").remove();
        console.log("removeu");
    })
})

}


