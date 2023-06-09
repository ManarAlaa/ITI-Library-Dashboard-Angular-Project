import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

interface DecodedToken {
  _id: any;
  password: any;
  id: string;
  email: string;
  role: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: any;
  private authToken: string ="";


  constructor(private http: HttpClient) { }

   url = 'http://localhost:8080/login'; // Replace with your server URL

  login(email: string | null, password: string | null) {
    this.http.post<any>(this.url, { email, password })
      .subscribe(
        data => {
          // Save the authentication token or user data to local storage
          localStorage.setItem('authToken', data.token);    
             window.location.href = 'dashboard';
        });
      }
      
      setAuthTokenHeader(): HttpHeaders {
        // Set the authentication token in the header
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          throw new Error('Authentication token not found.');
        }
        return new HttpHeaders({
          'x-auth-token': authToken
        });
      }

      getRole(): string{
        const authtoken = localStorage.getItem('authToken');
        if (!authtoken) {
          throw new Error('authToken not found in localStorage');
        }
        const decodedToken: DecodedToken = jwt_decode(authtoken);
        return decodedToken.role;
      }
      
      getPassword(): string{
        const authtoken = localStorage.getItem('authToken');
        if (!authtoken) {
          throw new Error('authToken not found in localStorage');
        }
        const decodedToken: DecodedToken = jwt_decode(authtoken);
        console.log(decodedToken.password);
        return decodedToken.password;
      }

       islogged(): boolean {
        const userToken = localStorage.getItem('authToken');
        if (userToken) {
          return true;
        } else {
          return false;
        }
      }
      getID(): string{
        const authtoken = localStorage.getItem('authToken');
        if (!authtoken) {
          throw new Error('authToken not found in localStorage');
        }
        const decodedToken: DecodedToken = jwt_decode(authtoken);
        const user = decodedToken._id
        console.log(user);
        return user;
      }
      
      getEmail(): string{
        const authtoken = localStorage.getItem('authToken');
        if (!authtoken) {
          throw new Error('authToken not found in localStorage');
        }
        const decodedToken: DecodedToken = jwt_decode(authtoken);
        console.log(decodedToken);
        return decodedToken.email;
      }
      
        logout() {
          localStorage.removeItem('authToken');
        }
      
} //class