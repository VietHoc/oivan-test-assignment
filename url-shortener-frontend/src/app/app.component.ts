import { Component } from '@angular/core';
import { UrlService } from './shared/service/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'url-shortener-frontend';
  public url = '';
  public newUrl = '';
  public textShortUrl = 'Your short URL:';
  public textOriginalUrl = 'Your original URL:'
  public textUrl = '';
  public errorMessage = '';

  constructor(private urlService: UrlService) { }

  public encodeUrl(): void {
    this.textUrl = this.textShortUrl;
    this.errorMessage = '';
    this.urlService.encode(this.url).subscribe(response => {
      this.newUrl = response.short_url;
    }, (error) => {
      this.newUrl = '';
      this.errorMessage = error.error.error || error.error.errors.join(', ');
    });
  }

  public decodeUrl(): void {
    this.textUrl = this.textOriginalUrl;
    this.errorMessage = '';
    this.urlService.decode(this.url).subscribe(response => {
      this.newUrl = response.original_url;
    }, (error) => {
      this.newUrl = '';
      this.errorMessage = error.error.error || error.error.errors.join(', ');
    });
  }

  public clear(): void {
    this.url = '';
    this.newUrl = '';
    this.errorMessage = '';
    this.textUrl = '';
  }

  public copyClipboard() {
    navigator.clipboard.writeText(this.newUrl);
  }
}
