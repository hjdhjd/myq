/* Copyright(C) 2017-2021, HJD (https://github.com/hjdhjd). All rights reserved.
 *
 * myq-logging.ts: Logging support for the myQ library.
 */

// Logging support, borrowed from Homebridge.
export interface myQLogging {

    debug(message: string, ...parameters: unknown[]): void;
    error(message: string, ...parameters: unknown[]): void;
    info(message: string, ...parameters: unknown[]): void;
    warn(message: string, ...parameters: unknown[]): void;
}
