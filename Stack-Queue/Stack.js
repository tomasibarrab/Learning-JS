function Stack() {
  this.top = null;
  this.size = 0;

  this.push = function(data) {
    var node = {
      data : data,
      next : null
    };
    
    node.next = this.top;
    this.top = node;
    this.size ++;
    return node.data;
  }

  this.pop = function() {
    if (this.top === null) {
      return 'No more elements on Stack'
    } else {
      var popElement = this.top;
      this.top = this.top.next;
      if (this.size > 0){
        this.size --;
      }
      return popElement.data;
    }
  }
}
