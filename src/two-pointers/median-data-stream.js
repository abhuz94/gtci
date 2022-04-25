var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.swap=t.defaultComparator=void 0;t.defaultComparator=(e,t)=>e-t;t.swap=(e,t,r=[])=>{if(e!==t){const s=r[e];r[e]=r[t],r[t]=s}return r};var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.store=r.PROTECTED_PROPERTY_PROPS=void 0;const s=new WeakMap;r.store=s;const o=Object.freeze({configurable:!1,writable:!1,enumerable:!1});r.PROTECTED_PROPERTY_PROPS=o;class a{constructor(e=[],s=t.defaultComparator){if(!Array.isArray(e))throw new TypeError('"arr" must be an array');r.store.set(this,{heap:[],comparator:s,size:0}),this.push(...e)}pop(){const{heap:e,size:s}=r.store.get(this);if(0===s)return;(0,t.swap)(0,s-1,e);const o=e.pop();return r.store.set(this,{...r.store.get(this),size:e.length}),this.sink(0),o}push(...e){return e.forEach((e=>this.pushHelper(e))),this}peek(){return r.store.get(this).heap[0]}size(){return r.store.get(this).size}toArray(){return[...r.store.get(this).heap]}}Object.defineProperties(a.prototype,{pushHelper:{value(e){const{heap:t,size:s}=r.store.get(this);return t.push(e),r.store.set(this,{...r.store.get(this),heap:t,size:t.length}),this.swim(s),this},...r.PROTECTED_PROPERTY_PROPS},swim:{value(e=0){const{heap:s,comparator:o}=r.store.get(this);let a=e-1>>1,i=e;for(;a>=0&&o(s[a],s[i])<0;)(0,t.swap)(a,i,s),i=a,a=i-1>>1;return this},...r.PROTECTED_PROPERTY_PROPS},sink:{value(e=0){const{heap:s,size:o,comparator:a}=r.store.get(this),i=(e,t)=>t<o&&a(s[e],s[t])<0?t:e;let p=e,h=i(2*e+1,2*e+2);for(;h<o&&a(s[p],s[h])<0;)(0,t.swap)(h,p,s),p=h,h=i(2*p+1,2*p+2);return this},...r.PROTECTED_PROPERTY_PROPS}});var i=a;e.default=i;
const Heap = e.default;

var MedianFinder = function() {
    this.maxHeap = new Heap();
    this.minHeap = new Heap([], (a, b) => b - a);
};``

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (!this.maxHeap.size() || this.maxHeap.peek() >= num) { this.maxHeap.push(num); }
    else { this.minHeap.push(num); }

    this.__rebalance();

    return this;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.size() === this.minHeap.size()) { return (this.maxHeap.peek() + this.minHeap.peek()) / 2; }
    else if (this.maxHeap.size() > this.minHeap.size()) { return this.maxHeap.peek(); }

    return this.minHeap.peek();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 MedianFinder.prototype.__rebalance = function() {
    if (!this.__isBalanced()) {
        if (this.maxHeap.size() > this.minHeap.size()) { this.minHeap.push(this.maxHeap.pop()); }
        else { this.maxHeap.push(this.minHeap.pop()); }
    }

    return this;
}

MedianFinder.prototype.__isBalanced = function() { return Math.abs(this.maxHeap.size() - this.minHeap.size()) <= 1; }

export default MedianFinder;
