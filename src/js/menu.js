const buttonMap = new Map([
    ['toHall', { camera: { position: '160 0 -30', rotation: '0 350 0' }, roomId: 'hall' }],
    ['toKitchen', { camera: { position: '195 0 -438', rotation: '-5 -266 0' }, roomId: 'kitchen' }],
    ['toBedroom', { camera: { position: '880 0 -417', rotation: '-16 450 0' }, roomId: 'bedroom' }],
    ['toChildroom', { camera: { position: '910 0 -60', rotation: '-10 270 0' }, roomId: 'childroom' }],
    ['toBathroom', { camera: { position: '570 0 -17', rotation: '-27 553 0' }, roomId: 'bathroom', hideFloor: true }],
    ['toWC', { camera: { position: '360 0 -48', rotation: '-39 540 0' }, roomId: 'wc', hideFloor: true }],
]);
const menuButtons = document.getElementsByClassName('menu__button');
const floor = document.getElementById('floor');
const camera = document.getElementById('camera');
const lights = document.getElementsByTagName('a-light');

function toggleActiveMenuItem(newActiveButtonId) {
    const activeMenuItemClass = 'menu__button--active';
    Array.prototype.forEach.call(
        menuButtons,
        button => button.classList.remove(activeMenuItemClass),
    );
    document.getElementById(newActiveButtonId).classList.add(activeMenuItemClass);
}

function moveCamera({ position, rotation }) {
    camera.setAttribute('position', position);
    camera.setAttribute('rotation', rotation);
}

function toggleLight(newRoomId) {
    Array.prototype.forEach.call(lights, light => light.setAttribute('visible', false));
    const newRoomLights = document.getElementById(newRoomId).getElementsByTagName('a-light');
    Array.prototype.forEach.call(newRoomLights, light => light.setAttribute('visible', true));
}

function chooseMenuItem() {
    const { id } = this;
    toggleActiveMenuItem(id);

    const { camera: cameraData, roomId, hideFloor } = buttonMap.get(id);
    moveCamera(cameraData);
    toggleLight(roomId);
    floor.setAttribute('visible', !hideFloor);

    // TODO работа с адресной строкой
}

Array.prototype.forEach.call(menuButtons, button => button.addEventListener('click', chooseMenuItem));
chooseMenuItem.call({ id: 'toKitchen' });

// TODO hide/open menu
