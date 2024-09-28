// import './quote/quote'
import Quote from "./quote/quote";
const Data = () => {

    const Lists =[
        {
            "quote": "In the middle of difficulty lies opportunity.",
            "author": "Albert Einstein",
            "quest": "This quote by Albert Einstein highlights the importance of resilience and optimism. Life often presents us with challenges, and it's easy to feel overwhelmed or defeated when faced with adversity. However, Einstein encourages us to view these moments as opportunities for growth and innovation. By maintaining a positive mindset and looking for solutions, we can turn difficulties into stepping stones for success. This idea is not just applicable in scientific endeavors, as Einstein might have experienced, but also in everyday life, where personal and professional challenges can lead to unexpected breakthroughs."
          },
          {
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill",
            "quest": "Winston Churchill's words resonate deeply with anyone striving to achieve greatness. He reminds us that both success and failure are temporary states and that true progress comes from persistence. Success can sometimes make people complacent, while failure can discourage them. But neither should define us. The key lies in having the courage to push forward, regardless of the outcome. Churchill himself faced numerous setbacks throughout his career, but it was his relentless determination that ultimately made him one of the most celebrated leaders in history. This quote serves as a powerful reminder to keep moving forward."
          },
          {
            "quote": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs",
            "quest": "Steve Jobs believed that passion is the driving force behind truly great accomplishments. In this quote, he emphasizes that in order to achieve excellence, one must genuinely enjoy and be committed to the work they are doing. When we love what we do, the effort feels less like a burden and more like a fulfilling journey. Jobs himself was known for his passion for technology and innovation, which fueled his drive to create groundbreaking products at Apple. His legacy continues to inspire many entrepreneurs and professionals to find work that excites and motivates them."
          },
          {
            "quote": "Be yourself; everyone else is already taken.",
            "author": "Oscar Wilde",
            "quest": "Oscar Wilde's witty yet profound observation encourages individuality and self-acceptance. In a world where many people try to conform to societal norms or imitate others, Wilde reminds us that the best thing we can be is ourselves. Authenticity is key to personal fulfillment and happiness, and it’s through embracing our unique traits, talents, and flaws that we find our true selves. Wilde himself was a figure who defied convention, and his quote continues to resonate with those who feel pressure to conform to external expectations. It’s a reminder to embrace your individuality."
          },
          {
            "quote": "You miss 100% of the shots you don't take.",
            "author": "Wayne Gretzky",
            "quest": "Wayne Gretzky, one of the greatest hockey players of all time, delivered this timeless piece of advice that transcends sports. His quote reminds us that opportunities are only possible if we are willing to take risks. Whether in business, personal pursuits, or relationships, avoiding action guarantees failure. This mindset of taking initiative and being unafraid of failure is crucial for anyone looking to grow or succeed. Gretzky's career was marked by many successes, but his achievements were only possible because he took countless shots, both literally and metaphorically. The lesson is clear: you must try to succeed."
          },
          {
            "quote": "Believe you can and you're halfway there.",
            "author": "Theodore Roosevelt",
            "quest": "Theodore Roosevelt's quote underscores the critical role of self-belief in achieving success. Many people struggle with doubt, which can prevent them from even attempting to reach their goals. Roosevelt, a man who overcame numerous personal and professional challenges, reminds us that confidence is often the first and most important step toward any accomplishment. Once we believe in ourselves and our abilities, the rest becomes more manageable. His quote encourages us to develop a positive mindset, knowing that believing in our potential can propel us closer to our goals than we might imagine."
          },
          {
            "quote": "It does not matter how slowly you go as long as you do not stop.",
            "author": "Confucius",
            "quest": "This quote by Confucius speaks to the power of persistence and steady effort. In a fast-paced world, it can be easy to feel discouraged if success doesn't come quickly. However, Confucius advises that the speed of progress is not as important as the act of continuing to move forward. Whether in personal development, career growth, or learning new skills, patience and consistency are the keys to achieving long-term success. His wisdom reminds us that progress, no matter how slow, is still progress. What matters most is that we don’t give up on our goals."
          },
          {
            "quote": "The best way to predict your future is to create it.",
            "author": "Peter Drucker",
            "quest": "Peter Drucker's quote speaks to the power of proactive planning and personal responsibility in shaping one's destiny. Rather than waiting for things to happen, he encourages us to take control and actively work toward the future we desire. This quote is a call to action, urging people to set goals, take initiative, and build the life they want. Drucker, a pioneer in modern business management, understood the importance of leadership and forward-thinking in both personal and professional realms. His advice is timeless and applies to anyone looking to carve out a successful and fulfilling path in life."
          },
          {
            "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            "author": "Ralph Waldo Emerson",
            "quest": "Ralph Waldo Emerson's quote invites us to embrace the unconventional and forge our own paths. It speaks to the power of innovation, creativity, and leadership in shaping new directions rather than following well-trodden routes. Emerson encourages us to take risks and make our own mark in the world. This message resonates especially in entrepreneurial ventures, artistic endeavors, and personal growth. His words remind us that true success often comes from blazing new trails and being unafraid to venture into the unknown. It’s about creating a legacy, not merely following in the footsteps of others."
          },
          {
            "quote": "Believe you can and you're halfway there.",
            "author": "Theodore Roosevelt",
            "quest": "Theodore Roosevelt's quote underscores the critical role of self-belief in achieving success. Many people struggle with doubt, which can prevent them from even attempting to reach their goals. Roosevelt, a man who overcame numerous personal and professional challenges, reminds us that confidence is often the first and most important step toward any accomplishment. Once we believe in ourselves and our abilities, the rest becomes more manageable. His quote encourages us to develop a positive mindset, knowing that believing in our potential can propel us closer to our goals than we might imagine."
          },
          {
            "quote": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs",
            "quest": "Steve Jobs believed that passion is the driving force behind truly great accomplishments. In this quote, he emphasizes that in order to achieve excellence, one must genuinely enjoy and be committed to the work they are doing. When we love what we do, the effort feels less like a burden and more like a fulfilling journey. Jobs himself was known for his passion for technology and innovation, which fueled his drive to create groundbreaking products at Apple. His legacy continues to inspire many entrepreneurs and professionals to find work that excites and motivates them."
          },
          {
            "quote": "Life is what happens when you're busy making other plans.",
            "author": "John Lennon",
            "quest": "John Lennon’s quote reflects on the unpredictability of life. We often become so focused on planning for the future that we forget to live in the present. While it’s important to have goals and aspirations, Lennon reminds us that life unfolds in unexpected ways, and the moments we experience while pursuing those plans are just as significant as the plans themselves. His words encourage us to appreciate the here and now, to embrace the beauty of spontaneity, and to recognize that life’s true value often lies in the unplanned, everyday moments that shape our journey."
          }

    ]
     console.log(Lists)
    return(
        <>
        {
            Lists.map((quotesdata) =>{
                // console.log(quotesdata);
                
                 return  <Quote data={quotesdata}/>

            })
        }
       
        </>
    )
};

export default Data;