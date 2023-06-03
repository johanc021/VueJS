const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            datos1: [
                { id: 1, nombre: 'Juan', edad: 25, email: 'juan@example.com' },
                { id: 2, nombre: 'María', edad: 30, email: 'maria@example.com' },
                { id: 3, nombre: 'Pedro', edad: 35, email: 'pedro@example.com' }
            ],
            datos2: [
                { id: 4, nombre: 'Luisa', edad: 28, email: 'luisa@example.com' },
                { id: 5, nombre: 'Carlos', edad: 32, email: 'carlos@example.com' },
                { id: 6, nombre: 'Ana', edad: 29, email: 'ana@example.com' }
            ],
            datos3: [
                { id: 7, nombre: 'Miguel', edad: 40, email: 'miguel@example.com' },
                { id: 8, nombre: 'Laura', edad: 27, email: 'laura@example.com' },
                { id: 9, nombre: 'Andrés', edad: 33, email: 'andres@example.com' }
            ]
        };
    }
});

app.component('tabla-componente', {
    props: {
        datos: {
            type: Array,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        colorFondo: {
            type: String,
            default: '#FFFFFF'
        },
        colorLetra: {
            type: String,
            default: '#000000'
        }
    },
    template: `
        <div class="container">
            <h3 class="text-center">{{ titulo }}</h3>
            <table class="table table-bordered" :style="{ background: colorFondo, color: colorLetra }">
                <tr>
                    <th class="text-center">Nombre</th>
                    <th class="text-center">Edad</th>
                    <th class="text-center">Email</th>
                </tr>
                    <tr v-for="dato in datos" :key="dato.id">
                    <td class="text-center">{{ dato.nombre }}</td>
                    <td class="text-center">{{ dato.edad }}</td>
                    <td class="text-center">{{ dato.email }}</td>
                </tr>
            </table>
        </div>
        
      `
});

app.mount('#app');