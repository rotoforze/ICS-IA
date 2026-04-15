class States {
    static NOT_STARTED = 0;
    static STARTED = 1;
    static PAUSED = 2;
    static FINISHED = 3;
}

const projects = [
    {
        id: 0,
        title: 'Crear app móvil',
        description: 'Crear una aplicación usando Java para iOS y Android.',
        state: States.STARTED
    },
    {
        id: 1,
        title: 'Desarrollar API REST',
        description: 'API REST con Spring Boot para gestión de usuarios.',
        state: States.STARTED
    },
    {
        id: 2,
        title: 'Página web corporativa',
        description: 'Diseño y desarrollo de una web corporativa.',
        state: States.NOT_STARTED
    },
    {
        id: 3,
        title: 'Sistema de autenticación',
        description: 'Implementar login y registro con JWT.',
        state: States.PAUSED
    },
    {
        id: 4,
        title: 'Dashboard de estadísticas',
        description: 'Panel de control con gráficas y métricas.',
        state: States.STARTED
    },
    {
        id: 5,
        title: 'Refactorización del backend',
        description: 'Mejorar rendimiento y limpieza del código.',
        state: States.FINISHED
    }
];

const tasks = [
    {
        id: 0,
        title: 'Instalar Spring Boot',
        description: 'Instalar las librerías necesarias.',
        projectId: 0,
        state: States.STARTED
    },
    {
        id: 1,
        title: 'Diseñar interfaz móvil',
        description: 'Crear wireframes de la aplicación.',
        projectId: 0,
        state: States.NOT_STARTED
    },
    {
        id: 2,
        title: 'Configurar emuladores',
        description: 'Configurar emuladores Android e iOS.',
        projectId: 0,
        state: States.NOT_STARTED
    },
    {
        id: 3,
        title: 'Crear proyecto base',
        description: 'Inicializar proyecto Spring Boot.',
        projectId: 1,
        state: States.FINISHED
    },
    {
        id: 4,
        title: 'Modelar entidades',
        description: 'Definir modelos y relaciones.',
        projectId: 1,
        state: States.STARTED
    },
    {
        id: 5,
        title: 'Crear controladores',
        description: 'Implementar endpoints REST.',
        projectId: 1,
        state: States.NOT_STARTED
    },
    {
        id: 6,
        title: 'Documentar API',
        description: 'Usar Swagger para documentación.',
        projectId: 1,
        state: States.NOT_STARTED
    },
    {
        id: 7,
        title: 'Definir estructura HTML',
        description: 'Crear estructura base del sitio.',
        projectId: 2,
        state: States.NOT_STARTED
    },
    {
        id: 8,
        title: 'Diseñar estilos CSS',
        description: 'Aplicar estilos responsive.',
        projectId: 2,
        state: States.NOT_STARTED
    },
    {
        id: 9,
        title: 'Optimizar SEO',
        description: 'Mejorar posicionamiento web.',
        projectId: 2,
        state: States.NOT_STARTED
    },
    {
        id: 10,
        title: 'Diseñar flujo de login',
        description: 'Definir proceso de autenticación.',
        projectId: 3,
        state: States.FINISHED
    },
    {
        id: 11,
        title: 'Implementar JWT',
        description: 'Generar y validar tokens.',
        projectId: 3,
        state: States.STARTED
    },
    {
        id: 12,
        title: 'Control de roles',
        description: 'Permisos según tipo de usuario.',
        projectId: 3,
        state: States.NOT_STARTED
    },
    {
        id: 13,
        title: 'Testing de seguridad',
        description: 'Revisar vulnerabilidades.',
        projectId: 3,
        state: States.NOT_STARTED
    },
    {
        id: 14,
        title: 'Definir métricas',
        description: 'Identificar KPIs.',
        projectId: 4,
        state: States.FINISHED
    },
    {
        id: 15,
        title: 'Crear gráficas',
        description: 'Integrar librería de gráficos.',
        projectId: 4,
        state: States.STARTED
    },
    {
        id: 16,
        title: 'Conectar con API',
        description: 'Consumir datos desde backend.',
        projectId: 4,
        state: States.STARTED
    },
    {
        id: 17,
        title: 'Optimizar rendimiento',
        description: 'Mejorar carga de datos.',
        projectId: 4,
        state: States.NOT_STARTED
    },
    {
        id: 18,
        title: 'Analizar código existente',
        description: 'Detectar duplicidades y errores.',
        projectId: 5,
        state: States.FINISHED
    },
    {
        id: 19,
        title: 'Refactorizar servicios',
        description: 'Reducir complejidad del código.',
        projectId: 5,
        state: States.FINISHED
    },
    {
        id: 20,
        title: 'Actualizar dependencias',
        description: 'Actualizar librerías obsoletas.',
        projectId: 5,
        state: States.FINISHED
    }
];

export function getProjectList() {
    return projects;
}

export function getTaskList() {
    return tasks;
}

export function whichState(state) {
    if (typeof state == 'number') {
        switch (state) {
            case States.NOT_STARTED:
                return 'Sin empezar';
            case States.STARTED:
                return 'Empezado';
            case States.PAUSED:
                return 'Pausado';
            case States.FINISHED:
                return 'Terminado';
        }
    } else {
        return `Expected typeof number got: ${typeof state}`;
    }
}

export function getAllStates() {
    const mapAttributes = new Map();
    for (const att in States) {
        mapAttributes.set(States[att], whichState(States[att]));
    }
    return mapAttributes;
}