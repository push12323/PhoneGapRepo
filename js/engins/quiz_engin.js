/**
 * @author prashant.raut
 */

setQuizPages(quizPages);

function setQuizPages(pages)
{
    //this.quizPages = pages;
    this.loadFirstPage();
}
    
function getQuizPages()
{
    return quizPages;
}
    
function loadFirstPage()
{
    console.log(quizPages[0]);
    loadPage("js/view/"+quizPages[0])
}
