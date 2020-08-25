if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    alert('NO MEOMENTO SITE DISPONIVEL APENAS PARA COMPUTADORES')
} else {




    function bhaskara() {

        var a = window.document.getElementById('txtn1').value
        var b = window.document.getElementById("txtn2").value
        var c = window.document.getElementById("txtn3").value
        //coletando valores

        var delt = b ** 2 - 4 * a * c


        //se a for igual a zero
        if (a == 0) {
            window.alert(`Toda função do 2º grau tem a ≠ 0`)
        } else {
            delta.innerHTML = ` ${delt}`
            if (delt < 0) {
                //Δ
                res1.innerHTML = ` <strong>impossivel, delta negativo</strong>`
                res2.innerHTML = ` <strong>impossivel, delta negativo</strong>`
            } else {
                var x1 = (- b + (delt ** (1 / 2))) / 2 * a
                var x2 = (- b - (delt ** (1 / 2))) / 2 * a
                res1.innerHTML = ` <strong>${x1}</strong>`
                res2.innerHTML = ` <strong>${x2}</strong>`
                vert.innerHTML = ` <strong>${-b / (2 * a)}, ${-delt / (4 * a)}</strong>`
            }
            //condicoes concavidade
            if (a < 0) {
                con.innerHTML = ` <strong>baixo</strong>`
            } else {
                con.innerHTML = ` <strong>cima</strong>`
            }
            //invertendo grafico              
            if (x1 > x2) {
                var pri = x2
                var seg = x1
            } else {
                var pri = x1
                var seg = x2
            }
            //grafico
            let myChart = document.getElementById('myChart').getContext('2d');
            let massPopChart = new Chart(myChart, {
                type: 'line',
                data: {
                    //x
                    labels: [x1, -b / (2 * a), x2],

                    datasets: [{
                        label: 'x',
                        //y
                        data: [0, -delt / (4 * a), 0],
                        backgroundColor: 'transparent'
                    }]
                },
                options: {
                    animation: {
                        //animação dura 1 segundo
                        duration: 1000

                    }

                }
            });

        }


    }
}

                
