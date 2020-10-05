export default function formulario(
    state = {
        usuario: 'TESTE STATE REUDX',
        formulario: [{ nome: 'Renan', email: 'renan@gmail.com' }],
    },
    action
) {
    switch (action.type) {
        case 'ADD_PEOPLE':
            console.log(state);

            return {
                ...state,
                formulario:[
                    ...state.formulario,
                    action.payload
                ]
            };

        case 'EDIT_PEOPLE':
            console.log('ESTA NO EDIT_PEOPLE');
            console.log(action.payload.index +" - " +action.payload.newName)
            const arrayEditado = state.formulario.map((item, index) => {
                if (index == action.payload.index) {
                 console.log(item.nome);
                  item.nome = action.payload.newName
                  return item
                }
                return {
                    ...item,

                }
            });

            console.log(arrayEditado);
            return {
                ...state,
                formulario: arrayEditado
            };

         case 'EDIT_USUARIO':
            console.log('ENTROU NO USUARIO @@@@@@@');

            return {

                 usuario: action.payload,
                 formulario:[...state.formulario],
                };


        default:
            return state;
    }
}
