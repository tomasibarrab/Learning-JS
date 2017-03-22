function Queue() {
  this.first = null;
  this.size = 0;

  this.enqueue = function(data) {
    var node = {
      data : data,
      next : null
    };

    if (!this.first){
      this.first = node;
    } else {
      nextElement = this.first;
      while (nextElement.next) {
        nextElement = nextElement.next;
      }
      nextElement.next = node;
    }

    this.size ++;
    return node.data;
  }

  this.dequeue = function() {
    if (this.first === null) {
      return 'No more elements on Queue';
    } else {
      deqElement = this.first;
      this.first = this.first.next;
      this.size --;
      return deqElement.data;
    }
  }
}
