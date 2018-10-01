import './styles.scss';
import { Entry } from './ping-pong';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { pingPong } from './ping-pong';

var allEntries = [];

$(document).ready(function() {
  $("#entry-form").submit(function(event) {
    event.preventDefault();
    let subject = $("#subject").val();
    let body = $("#body").val();
    var journalEntry = new Entry(subject,body);
    allEntries.push(journalEntry);
    journalEntry.entryNumber = allEntries.length;
    $(".journal-container").prepend("<div class='entry-display' id='entry-" + journalEntry.entryNumber + "'></div>");
    $(".entry-display:first").append(
        "<h2>" + journalEntry.subject + "</h2>" +
        "<h4 class='teaser'>" + journalEntry.getTeaser() + "</h4>" +
        "<p class='entry-body hidden'>" + journalEntry.body + "</p>" +
        "<p class='entry-body hidden meta-data'> Entry Number: " + journalEntry.entryNumber + "</p>" +
        "<p class='entry-body hidden meta-data'> Number of Words: " + journalEntry.wordCount() + "</p>" +
        "<p class='entry-body hidden meta-data'> Vowels: " + journalEntry.vowelCount() + "</p>" +
        "<p class='entry-body hidden meta-data'> Consonants: " + journalEntry.consonantCount() + "</p>" +
        "<button type='button' class='expand-button'>Expand Entry</button>"
      );
      $(".expand-button:first").click(function() {
        $(this).siblings(".teaser, .entry-body").toggleClass("hidden");
        $(this).siblings(".meta-data").toggleClass("inline");
      });
  });
});
