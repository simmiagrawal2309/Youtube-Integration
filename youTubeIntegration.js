import { LightningElement, track } from 'lwc';
import youtubeSearchBar from '@salesforce/apex/YoutubeIntegrationClass.youtubeSearchBar';
export default class YouTubeIntegration extends LightningElement {
    @track youtubelogourl = "https://www.freepnglogos.com/uploads/youtube-logo-icon-transparent---32.png";

    @track searchValue;
    @track isContentAvailable = false;
    @track content;
    @track videoidurl;
    @track isModalOpen = false;
    closeModal() {
        this.isModalOpen = false;
        // this.isModalOpenforDelete = false;
    }
    searchButtonHandler() {
        this.searchValue = this.template.querySelector('.searchclass').value;
        console.log('this.searchValue=', this.searchValue);
        youtubeSearchBar({ searchQueryValue: this.searchValue })
            .then(response => {
                this.isContentAvailable = !this.isContentAvailable;

                console.log('respons is: ', JSON.parse(response));
                this.content = JSON.parse(response);
                console.log('this.content = ', JSON.stringify(this.content));
                //  var temp = 


            })
            .catch(error => {
                console.log('error is: ', error);
            })

    }

    videoplay(event) {
        var forvideoId = event.currentTarget.dataset.id;
        console.log('forvideoId ==== ', forvideoId);

        // this.videoidurl = "https://www.youtube.com/embed/" + forvideoId;
        this.videoidurl = "https://www.youtube.com/embed/" + forvideoId + "?autoplay=1&mute=1";

        // https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        //this.videoidurl = "https://www.youtube.com/watch?v="+forvideoId;
        //this.videoidurl = 'youtube.com/watch?;
        console.log(this.videoidurl);
        this.isModalOpen = true;
    }


}