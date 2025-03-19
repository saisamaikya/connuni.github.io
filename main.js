function main () {
    let activeList = {};
document.querySelectorAll('.nav-links').forEach(item =>{
    item.addEventListener('mouseleave', hideLinks);
});

document.querySelectorAll('.navbar-list-item').forEach(item =>{
    item.addEventListener('mouseover', showLinks);
});

function hideLinks () {
    if(activeList.ele) {
        activeList.ele.classList.remove(`${activeList.clas}--active`);
    activeList.trigger.classList.remove('navbar-list-item--active');
    }
    
}

function showLinks (event) {
    hideLinks();
    event.currentTarget.classList.add('navbar-list-item--active');
    const targetElemClass = event.currentTarget.dataset.target;
    const targetElem = document.querySelector(`.${targetElemClass}`);
    activeList = {ele:targetElem, clas: targetElemClass, trigger: event.currentTarget}; 
    targetElem.classList.add(`${targetElemClass}--active`);
}
}
setTimeout(() => main(), 100);
