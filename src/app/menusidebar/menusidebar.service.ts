import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MenuSideBar} from './menusidebar.interface';
@Injectable({
    providedIn: 'root'
  })
  //backende mutliple get methodumun olduğunu ve oradaki apideki bu methoda post edeceğimi düşünüyorum
  //bu işlemi sumbit butonu için yaparak canlı sistem gibi düşünüyorum
  //httpclientı eklemedim base url eklemedim 
export class MenuSideBarService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  
    public GetMenuSideBarMenuSideBar(e: any): Observable<MenuSideBar> {
      return this.http.post<MenuSideBar>(this.baseUrl + 'MenuSideBar/Get', e);
    }
    public SaveMenuSideBar(e: any) {
      return this.http.post<any>(this.baseUrl + 'MenuSideBar', e);
    }
    public EditMenuSideBar(e: any) {
      return this.http.put(this.baseUrl + 'MenuSideBar', e);
    }
    public GetMenuSideBarList(e: any): Observable<MenuSideBar> {
      return this.http.post<MenuSideBar>(this.baseUrl + 'MenuSideBar/Get', e);
    }
   
  
  
  
  }