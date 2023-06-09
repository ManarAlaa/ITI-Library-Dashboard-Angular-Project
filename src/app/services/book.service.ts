import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Book }  from '../models/book';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  upload(file: File) {
    throw new Error('Method not implemented.');
  }
  baseurl="http://localhost:8080/Book";
  baseurlFiltered="http://localhost:8080/Book/filterBooks/get";
  baseurl2="http://localhost:8080/Book/add";
  baseurl3="http://localhost:8080/Book/update";
  newArrivedURL="http://localhost:8080/Book/newArrivedBooks";
  mostBorrowedURL="http://localhost:8080/Bookoper/mostBorrowedBooks";
  mostReadingURL="http://localhost:8080/Bookoper/mostReadingBooks";
  mostPopularURL="http://localhost:8080/Bookoper/mostPopularBooks";
  baseurlAvailable="http://localhost:8080/Book/available/get";

  getAllBooks(): Observable<Book[]>{
    const headers = this.authService.setAuthTokenHeader();   
      return this.http.get<Book[]>(this.baseurl, {headers});
  }
  getAvailableBooks(): Observable<Book[]>{
    const headers = this.authService.setAuthTokenHeader();   
      return this.http.get<Book[]>(this.baseurlAvailable, {headers});
  }
  getFilteredBooks(): Observable<Book[]>{
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.get<Book[]>(this.baseurlFiltered, {headers});
  }
  getOneBook(id:number): Observable<Book>{
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.get<Book>(this.baseurl+"/"+id, { headers });
  }
  deleteBook(id:number){
    const headers = this.authService.setAuthTokenHeader();   
    location.reload();
    return this.http.delete<Book>(this.baseurl+"/"+id, { headers });
  }
  updateBook(book:Book, id:number){
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.put<Book>(this.baseurl3+"/"+id,book, { headers });
  }
  addBook(book: Book){
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.post<Book>(this.baseurl2,book, { headers });
  }
  newArrivedBooks(): Observable<Book[]>{
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.get<Book[]>(this.newArrivedURL, { headers });
  }
  mostPopularBooks(): Observable<Book[]>{
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.get<Book[]>(this.mostPopularURL, { headers });
  }
  mostBorrowedBooks(): Observable<Book[]>{
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.get<Book[]>(this.mostBorrowedURL, { headers });
  }
  mostReadingBooks(): Observable<Book[]>{
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.get<Book[]>(this.mostReadingURL, { headers });
  }

  searchForBook(searchKey: string, title: string, publisher:string , author:string): Observable<any> {
    const requestBody = {
      searchKey: searchKey,
      title: title,
      publisher: publisher,
      author: author
     
    };
    const headers = this.authService.setAuthTokenHeader();   

    return this.http.post(`${this.baseurl}/search`, requestBody , { headers });
  }


  constructor(public http:HttpClient, public router:Router, private authService: AuthService) {
    const headers = this.authService.setAuthTokenHeader();
      this.http.get<Book>("http://localhost:8080/Book", { headers }).subscribe(data=>{
        console.log(data); 
    })
}
}
