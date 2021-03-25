const app = new Vue({
    el: '#app',
    data: {
        books: [{ id: 1, name: '算法导论', date: '2006-9', price: 85, count: 1 }, { id: 2, name: 'UNIX编程艺术', date: '2006-2', price: 59, count: 1 }, { id: 3, name: '编程珠玑', date: '2008-10', price: 39, count: 1 }, { id: 4, name: '代码大全', date: '2006-3', price: 128, count: 1 }]
    },
    methods: {
        jianFun(i) {
            this.books.forEach(element => {
                if (element.id === i+1) {
                    if (element.count === 0) {
                        return false;
                    } else {
                        element.count -= 1;
                    }
                }
            });
        },
        addFun(i) {
            this.books.forEach(element => {
                if (element.id === i+1) {
                    element.count += 1;
                }
            });
        },
        deleteFun(i) {
            this.books.splice(i,1);
        }
    },
    filters: {//过滤器
        showPrice(price) {
            return `￥${price.toFixed(2)}` 
        }
    },
    computed: {
        totalPriceFun() {
            let totalPrice = 0;
            this.books.forEach(item => {
                totalPrice += item.price * item.count; 
            });
            return totalPrice;
        }
    }
})