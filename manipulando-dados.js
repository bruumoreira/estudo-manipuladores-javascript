
// Retornando ou definindo o dado de um elemento
//$('.cars_list li:first').data('ano', '1990')

// Não remove o dado, porque foi inserido na html
//$('.cars_list li:first').removeData('ano')

// Remove o dado que foi inserido na jQyery
//$('.cars_list li:first').removeData('pais')

$('.cars_list li').click(function(){

console.log(`Esse carro é do ano de ${$(this).data('ano')}`);

}); 