// index js
let jeffInput = document.getElementById("input1")
let jeffMsg = document.getElementById("msg1")
let markSend = document.getElementById("mark-send")
let jeffSend = document.getElementById("jeff-send")
let markMedia = document.getElementById("mark-media")
let jeffMedia = document.getElementById("jeff-media")

let markMsg = document.getElementById("msg2")
let markInput = document.getElementById("input2")

jeffInput.addEventListener("input",(e)=>{

    handleTyping(e,"jeff-send","jeff-media")

})

markInput.addEventListener("input",(e)=>{

    handleTyping(e,"mark-send","mark-media")
})

const handleTyping = (e,sendId,mediaId) =>{
    let inputValue = e.target.value
    let markSend = document.getElementById(sendId)
    let markMedia = document.getElementById(mediaId)

    if(inputValue.length > 0){
        markSend.classList.remove("hidden")
        markMedia.classList.add("hidden")
    }else{
        markSend.classList.add("hidden")
        markMedia.classList.remove("hidden")

    }
}

if(markSend){
    markSend.addEventListener("click",(e)=>{
        let value = markInput.value
        
        if(value.length > 0){
            sendToJeff(value)
        }
       
    })
}

const sendToJeff = (value)=>{
    markMsg.innerHTML += `
        <div class=" full mt-2 flex justify-end items-center ">
<div class="border border-gray rounded-full w-3/5 bg-gray-200 flex justify-start items-center p-1">
    <span class="text-xs ml-2 font-semibold text-gray-500" >
        ${value}
    </span>
</div>
</div>
        `

        jeffMsg.innerHTML += `
        <div class=" full mt-2 ">
                    <div class="border border-gray rounded-full w-3/5 bg-gray-100 flex justify-start items-center p-1">
                        <img class="rounded-full shadow-md w-8 h-8 " src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg" alt="">
                        <span class="text-xs ml-2 font-semibold text-gray-500" >
                            ${value}
                        </span>
                    </div>
                </div>
        `

        markInput.value=""
        markSend.classList.add("hidden")
        markMedia.classList.remove("hidden")

}

if(jeffSend){
    jeffSend.addEventListener("click",(e)=>{
        let value = jeffInput.value
        if(value.length > 0){
            sendToMark(value)
        }
        
    })
}

const sendToMark = (value)=>{
    
        jeffMsg.innerHTML += `
        <div class=" full mt-2 flex justify-end items-center ">
<div class="border border-gray rounded-full w-3/5 bg-gray-200 flex justify-start items-center p-1">
    <span class="text-xs ml-2 font-semibold text-gray-500" >
        ${value}
    </span>
</div>
</div>
        `

        markMsg.innerHTML += `
        <div class=" full mt-2 ">
                    <div class="border border-gray rounded-full w-3/5 bg-gray-100 flex justify-start items-center p-1">
                        <img class="rounded-full shadow-md w-8 h-8 " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="">
                        <span class="text-xs ml-2 font-semibold text-gray-500" >
                            ${value}
                        </span>
                    </div>
                </div>
        `
        jeffInput.value=""
        jeffSend.classList.add("hidden")
        jeffMedia.classList.remove("hidden")


}

