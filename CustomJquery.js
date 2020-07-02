function Jquery( selector ){
    this.nodes = document.querySelectorAll(selector);
    this.length = this.nodes.length
}

Jquery.prototype.each = function(callback){
    for(var i=0; i<this.length; i++){
        callback.call(this,this.nodes[i],i)
    }
    return this;
}

Jquery.prototype.hide=function(){
    return displayToggle.call(this, this.nodes)
}

Jquery.prototype.show=function(){
    return displayToggle.call(this,this.nodes,true)
}

function fadIn(){
    // setTimeout(3000){
        // show('msg')
    // }
}

function fadOut(){
    // setTimeout(3000)
}

function displayToggle(elements, flag){
    for(let i=0;i<elements.length;i++){
        let item=elements[i]
        let display=item.style.display
        if(flag){
            if(display==="none"){
                item.style.display="block"
            }
        }
        else{
            if(display!=="none"){
                item.style.display="none"
            }
        }
    }
    return this
}

function $( selector ){
    return new Jquery(selector)
}

export default $;