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

function $( selector ){
    return new Jquery(selector)
}

export default $;