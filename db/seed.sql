-- Creates the meetings table and seeds sample data.
-- Run it in the Neon SQL Editor (Vercel → Storage → your database → Open in Neon).
-- Safe to run more than once: existing dates are skipped.

CREATE TABLE IF NOT EXISTS meetings (
  id             SERIAL        PRIMARY KEY,
  date           DATE          NOT NULL UNIQUE,
  meeting_type   VARCHAR(20)   NOT NULL
                               CHECK (meeting_type IN
                                 ('testimony','regular','stake','general','special')),
  presiding      VARCHAR(255)  NOT NULL,
  conducting     VARCHAR(255)  NOT NULL,
  announcements  TEXT[]        DEFAULT '{}',
  opening_hymn   JSONB         NOT NULL,
  opening_prayer VARCHAR(255)  NOT NULL,
  ward_business  JSONB         DEFAULT '[]',
  stake_business BOOLEAN       DEFAULT false,
  sacrament_hymn JSONB         NOT NULL,
  speakers       JSONB         DEFAULT '[]',
  closing_hymn   JSONB         NOT NULL,
  closing_prayer VARCHAR(255)  NOT NULL
);

INSERT INTO meetings (
  date, meeting_type, presiding, conducting, announcements,
  opening_hymn, opening_prayer, ward_business, stake_business,
  sacrament_hymn, speakers, closing_hymn, closing_prayer
) VALUES
(
  '2026-03-01', 'testimony', 'Bishop Daniel Carter', 'Brother Aaron Whitfield',
  ARRAY['Ward spring cleaning day is Saturday, March 14, at 9:00 a.m.'],
  '{"number": 6, "title": "Redeemer of Israel"}', 'Sister Olivia Martinez',
  '[{"description": "Sustaining of Brother Caleb Smith as ward clerk"}]', false,
  '{"number": 181, "title": "Jesus of Nazareth, Savior and King"}',
  '[{"name": "Brother Aaron Whitfield", "topic": "Bishopric testimony, followed by testimonies from the congregation", "type": "speaker"}]',
  '{"number": 134, "title": "I Believe in Christ"}', 'Brother David Kim'
),
(
  '2026-05-10', 'regular', 'Bishop Daniel Carter', 'Brother James Ellison',
  ARRAY['Mother''s Day treats will be handed out after sacrament meeting.'],
  '{"number": 298, "title": "Home Can Be a Heaven on Earth"}', 'Brother Thomas Reid',
  '[]', false,
  '{"number": 190, "title": "In Memory of the Crucified"}',
  '[{"name": "Sister Abigail Smith", "topic": "The influence of righteous mothers", "type": "speaker"}, {"name": "Primary children", "topic": "My Mother Dear", "type": "musical-number"}, {"name": "Brother Samuel Ortiz", "topic": "Strengthening families through daily scripture study", "type": "speaker"}]',
  '{"number": 294, "title": "Love at Home"}', 'Sister Hannah Brooks'
),
(
  '2026-07-05', 'testimony', 'Bishop Daniel Carter', 'Brother Caleb Smith',
  '{}',
  '{"number": 340, "title": "Father, Thy Children to Thee Now Raise"}', 'Sister Grace Holloway',
  '[]', false,
  '{"number": 176, "title": "''Tis Sweet to Sing the Matchless Love"}',
  '[{"name": "Brother Caleb Smith", "topic": "Bishopric testimony, followed by testimonies from the congregation", "type": "speaker"}]',
  '{"number": 338, "title": "America the Beautiful"}', 'Brother Evan Holloway'
),
(
  '2026-08-16', 'special', 'Bishop Daniel Carter', 'Brother Aaron Whitfield',
  ARRAY['Thank you to the Primary teachers and music leaders for preparing the program.'],
  '{"number": 301, "title": "I Am a Child of God"}', 'Sister Lily Chen',
  '[]', false,
  '{"number": 187, "title": "God Loved Us, So He Sent His Son"}',
  '[{"name": "Primary children", "topic": "Primary program: I Will Follow Jesus Christ", "type": "speaker"}, {"name": "Primary children", "topic": "I''m Trying to Be like Jesus", "type": "musical-number"}]',
  '{"number": 308, "title": "Love One Another"}', 'Brother Jacob Porter'
),
(
  '2026-08-30', 'regular', 'Bishop Daniel Carter', 'Brother James Ellison',
  ARRAY['Seminary registration closes Friday.'],
  '{"number": 66, "title": "Rejoice, the Lord Is King!"}', 'Sister Megan Porter',
  '[{"description": "Release of Brother Samuel Ortiz as elders quorum secretary"}]', false,
  '{"number": 191, "title": "Behold the Great Redeemer Die"}',
  '[{"name": "Sister Abigail Smith", "topic": "Finding peace through the Atonement of Jesus Christ", "type": "speaker"}, {"name": "Brother Michael Adeyemi", "topic": "Come, Thou Fount of Every Blessing", "type": "musical-number"}, {"name": "Brother David Kim", "topic": "Serving where we are called", "type": "speaker"}]',
  '{"number": 270, "title": "I''ll Go Where You Want Me to Go"}', 'Sister Rachel Moore'
),
(
  '2026-09-06', 'testimony', 'Bishop Daniel Carter', 'Brother James Ellison',
  ARRAY['Ward temple night is Thursday, September 10, at 7:00 p.m.', 'Primary program practice will be held after church in the Relief Society room.'],
  '{"number": 2, "title": "The Spirit of God"}', 'Sister Emily Nguyen',
  '[{"description": "Release of Sister Hannah Brooks as Primary secretary"}, {"description": "Sustaining of Brother Samuel Ortiz as a Sunday School teacher"}]', false,
  '{"number": 196, "title": "Jesus, Once of Humble Birth"}',
  '[{"name": "Brother James Ellison", "topic": "Bishopric testimony, followed by testimonies from the congregation", "type": "speaker"}]',
  '{"number": 136, "title": "I Know That My Redeemer Lives"}', 'Brother Michael Adeyemi'
),
(
  '2026-09-13', 'regular', 'Bishop Daniel Carter', 'Brother Aaron Whitfield',
  ARRAY['The ward service project at the community garden is Saturday at 9:00 a.m.'],
  '{"number": 85, "title": "How Firm a Foundation"}', 'Sister Olivia Martinez',
  '[]', false,
  '{"number": 169, "title": "As Now We Take the Sacrament"}',
  '[{"name": "Sister Lily Chen", "topic": "Keeping covenants as a youth", "type": "speaker"}, {"name": "Primary children", "topic": "I Am a Child of God", "type": "musical-number"}, {"name": "Brother Thomas Reid", "topic": "The blessings of the Sabbath day", "type": "speaker"}]',
  '{"number": 223, "title": "Have I Done Any Good?"}', 'Brother David Kim'
),
(
  '2026-09-20', 'stake', 'President Robert Hale, Stake Presidency', 'Bishop Daniel Carter',
  ARRAY['Stake youth devotional is Sunday, September 27, at 7:00 p.m. at the stake center.'],
  '{"number": 30, "title": "Come, Come, Ye Saints"}', 'Sister Rachel Moore',
  '[{"description": "Sustaining of Sister Megan Porter as Relief Society secretary"}]', true,
  '{"number": 193, "title": "I Stand All Amazed"}',
  '[{"name": "Sister Rachel Moore", "topic": "Prayer and personal revelation", "type": "speaker"}, {"name": "Ward choir", "topic": "Come, Follow Me", "type": "musical-number"}, {"name": "Brother Peter Lawson, High Council", "topic": "Ministering like the Savior", "type": "speaker"}]',
  '{"number": 152, "title": "God Be with You Till We Meet Again"}', 'Brother Samuel Ortiz'
),
(
  '2026-09-27', 'regular', 'Bishop Daniel Carter', 'Brother James Ellison',
  '{}',
  '{"number": 19, "title": "We Thank Thee, O God, for a Prophet"}', 'Brother Evan Holloway',
  '[{"description": "Welcome to the Porter family, who moved into the ward"}]', false,
  '{"number": 172, "title": "In Humility, Our Savior"}',
  '[{"name": "Sister Megan Porter", "topic": "Gratitude in all things", "type": "speaker"}, {"name": "Sister Grace Holloway", "topic": "Abide with Me!", "type": "musical-number"}, {"name": "Brother Jacob Porter", "topic": "Preparing to serve a mission", "type": "speaker"}]',
  '{"number": 241, "title": "Count Your Blessings"}', 'Sister Emily Nguyen'
),
(
  '2026-10-11', 'regular', 'Bishop Daniel Carter', 'Brother Aaron Whitfield',
  ARRAY['Sunday School will discuss favorite general conference talks next week.'],
  '{"number": 26, "title": "Joseph Smith''s First Prayer"}', 'Sister Hannah Brooks',
  '[{"description": "Recognition of Elder Nathan Brooks, returned from full-time missionary service"}]', false,
  '{"number": 194, "title": "There Is a Green Hill Far Away"}',
  '[{"name": "Sister Hannah Brooks", "topic": "The power of personal testimony", "type": "speaker"}, {"name": "Youth choir", "topic": "I Believe in Christ", "type": "musical-number"}, {"name": "Elder Nathan Brooks", "topic": "Lessons from full-time missionary service", "type": "speaker"}]',
  '{"number": 219, "title": "Because I Have Been Given Much"}', 'Brother Thomas Reid'
)
ON CONFLICT (date) DO NOTHING;
