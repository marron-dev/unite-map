var Drag = (function(img){
    img.onpointermove = function(event){
        if(event.buttons){
            this.style.left     = this.offsetLeft + event.movementX + 'px'
            this.style.top      = this.offsetTop  + event.movementY + 'px'
            this.style.position = 'absolute'
            this.draggable      = false
            this.setPointerCapture(event.pointerId)
        }
    }
});