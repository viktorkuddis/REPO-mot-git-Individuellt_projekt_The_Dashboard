const addLink_btn = document.getElementById("add-link_btn");
const snabblänkar_activityCard = document.getElementById("snabblänkar_activity-card")

const inputComponent = `
<div id="add-link_component">

    <div id="add-link-input_container">
        <p><strong>Lägg till länk: </strong></p>
        <input type="text" id="sidrubrik_input" placeholder="Sidrubrik här">
        <input type="text" id="webbadress_input" placeholder="Webbadress här">
    </div>

    <div id="add-link-buttons_container">
        <button id="confirm-add-Link_btn">Lägg till</button>
        <button id="exit-add-Link_btn">&#10005</button>
    </div>

</div>
`


//när knappen klickas...
addLink_btn.addEventListener("click", () => {
    //döljer knappen
    addLink_btn.style.display = "none";

    snabblänkar_activityCard.innerHTML += inputComponent;
})