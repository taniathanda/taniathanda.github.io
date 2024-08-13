$(document).ready(function(){
    getData();

    function getData(){
        let getStuString = localStorage.getItem('shops');
         if(getStuString){
            showStuArray = JSON.parse(getStuString);
            console.log(showStuArray);

            //$.each(array, function(key,value(){})) <-- looping to array
            let data ='';
            let j=1; 

            let totalprice = 0;
            $.each(showStuArray, function(i,v){
                // console.log(This is key + 1);
                // console.log(v.stu_name);
                
                data += `<tr>
                        <td>${j++}</td> 
                        <td>${v.name}</td>
                        <td>${v.price} ${v.currency}</td>
                        <td>
                            <button data-key="${i}" data-name="${v.name}" data-email="${v.price}"
                            data-phone="${v.amount}">+</button> ${v.qty}
                            <button data-key="${i}" data-name="${v.name}" data-email="${v.price}"
                            data-phone="${v.amount}">-</button> 
                        </td>
                        <td>${v.qty * v.price} ${v.currency}</td> 
                        </tr>`;

                        totalprice += (v.qty*v.price);
            })

            data += `<tr>  
                        <td colspan="4">Total</td> 
                        <td>${totalprice} MMK</td> 
                        </tr>`;

                        // console.log(data);
            $('#tbody').html(data); 
         }
    }

    $('.addToCart').click(function(){
        alert("hello");

        let id =$(this).data('id'); // this means addToCart. data means getting attributes from "data-"" (data-id/data-name/data-price)
        let name = $(this).data('name');
        let price = $(this).data('price');
        let currency = $(this).data('currency');
        console.log(id, name, price, currency);

        let items = {
            id: id,
            name: name,
            price: price,
            currency: currency,
            qty: 1
        }
        
        let itemsString = localStorage.getItem('shops'); // giving localstorage name as 'shops'. And get data from LS. Localstorage is string type only.
        let itemArray;
        if(itemsString == null){
            itemArray = [];
        }
        else{
            itemArray = JSON.parse(itemsString);
        }

        let status = false;
        //itemArray has all records from local storage. Loop itemArray and add qty if already exist 
        $.each(itemArray, function(i,v){
            if(v.id == id){
                v.qty++;
                status = true;
            }
        })

        //only if not exist, insert itemArray into object "items"
        if(status == false){
            itemArray.push(items);
        } 
        
        //Localstorage only accept string type. That's why, change array to string type before saving into local storage
        let itemData = JSON.stringify(itemArray);
        localStorage.setItem('shops', itemData); // saving into local storage

    })
})