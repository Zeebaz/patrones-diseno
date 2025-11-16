/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from '../helpers/colors.ts';
import { configManger } from './singleton/config-manager.ts';


configManger.setConfig('apiURL', 'localhost:3000/api...');
configManger.setConfig('timeout', '4000ms');

console.log(configManger.getAllConfig());
console.log(configManger.getConfig('apiURL'));
console.log(configManger.getConfig('timeout'));
console.log(configManger.getConfig('token'));