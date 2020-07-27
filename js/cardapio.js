function cardapio(resp, id){
	var table = document.createElement('table');
	var tHead = document.createElement('thead');
	var tBody = document.createElement('tbody');
	var trow = document.createElement('tr');
	var th_sabor = document.createElement('th');
	var th_ingredientes = document.createElement('th');
	var th_grande = document.createElement('th');
	var th_pequena = document.createElement('th');
	var main = document.querySelector('main');

	table.setAttribute('id', id);
	th_sabor.innerHTML = 'Sabor';
	th_ingredientes.innerHTML = 'Ingredientes';
	th_grande.innerHTML = 'Grande';
	th_pequena.innerHTML = 'Pequena';

	th_ingredientes.setAttribute('id', 'th-ingredientes');

	var pizza = resp;
	
	for(var i = 0; i < pizza.length; i++){
		var tr = document.createElement('tr');
		var td_sabor = document.createElement('td');
		var td_ingredientes = document.createElement('td');
		var td_grande = document.createElement('td');
		var td_pequena = document.createElement('td');

		td_ingredientes.setAttribute('id', 'td-ingredientes');

		td_sabor.innerHTML = pizza[i].sabor;
		td_ingredientes.innerHTML = pizza[i].ingredientes;
		td_grande.innerHTML = 'R$' + pizza[i].grande + ',00';
		td_pequena.innerHTML = 'R$' + pizza[i].pequena + ',00';


		tr.appendChild(td_sabor);
		tr.appendChild(td_ingredientes);
		tr.appendChild(td_grande);
		tr.appendChild(td_pequena);
		tBody.appendChild(tr);
	}

	tHead.appendChild(th_sabor);
	tHead.appendChild(th_ingredientes);
	tHead.appendChild(th_grande);
	tHead.appendChild(th_pequena);
	table.appendChild(tHead);
	table.appendChild(tBody);
	main.appendChild(table);
}

function adicionais(resp, id){
	var table = document.createElement('table');
	var tHead = document.createElement('thead');
	var tBody = document.createElement('tbody');
	var trow = document.createElement('tr');
	var th_borda = document.createElement('th');
	var th_preco = document.createElement('th');
	var main = document.querySelector('main');

	table.setAttribute('id', id);
	th_borda.innerHTML = 'Borda';
	th_preco.innerHTML = 'Preço';

	var adicional = resp;
	
	for(var i = 0; i < adicional.length; i++){
		var tr = document.createElement('tr');
		var td_borda = document.createElement('td');
		var td_preco = document.createElement('td');

		td_borda.innerHTML = adicional[i].bordas;
		td_preco.innerHTML = 'R$'+adicional[i].valor+',00';
		
		tr.appendChild(td_borda);
		tr.appendChild(td_preco);
		
		tBody.appendChild(tr);
	}

	tHead.appendChild(th_borda);
	tHead.appendChild(th_preco);
	table.appendChild(tHead);
	table.appendChild(tBody);
	main.appendChild(table);
}
