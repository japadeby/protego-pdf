/**
 * Copyright (C) 2018 Bernardo Balvanera
 *
 * This file is part of ProtegoPdf.
 *
 * ProtegoPdf is a free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { Injectable } from '@angular/core';

const LOCKPDF_STATE = 'LockPdfComponent.state';
const LOCKPDF_SAVE_DIR = 'LockPdfComponent.saveDir';

@Injectable()
export class StorageService {

  public setLockPdfState(state: any): void {
    sessionStorage.setItem(LOCKPDF_STATE, JSON.stringify(state));
  }

  public popLockPdfState(): any {
    const jsonItem = sessionStorage.getItem(LOCKPDF_STATE);
    sessionStorage.removeItem(LOCKPDF_STATE);

    return JSON.parse(jsonItem);
  }

  public setLockPdfDir(dir: string): void {
    sessionStorage.setItem(LOCKPDF_SAVE_DIR, JSON.stringify(dir));
  }

  public popLockPdfDir(): string {
    const jsonItem = sessionStorage.getItem(LOCKPDF_SAVE_DIR);
    sessionStorage.removeItem(LOCKPDF_SAVE_DIR);

    return JSON.parse(jsonItem);
  }
}
