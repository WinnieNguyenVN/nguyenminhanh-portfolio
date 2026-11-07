/* ==========================================================================
   NỘI DUNG PORTFOLIO — đây là FILE DUY NHẤT cần sửa để cập nhật website.
   CONTENT FILE — the ONLY file you need to edit to update the site.

   - Mỗi đoạn chữ có 2 bản: { vi: "...", en: "..." }
   - Thông tin liên hệ bên dưới là DỮ LIỆU GIẢ LẬP — hãy thay bằng thông tin thật.
   - Bản tiếng Anh do AI dịch — nên đọc lại trước khi công khai.
   ========================================================================== */

window.PORTFOLIO = {

  /* ---------- Hồ sơ / Profile ---------- */
  profile: {
    name: "Nguyễn Minh Anh",
    title: {
      vi: "Digital Transformation & Operations Manager",
      en: "Digital Transformation & Operations Manager"
    },
    location: { vi: "TP. Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, Vietnam" },
    tagline: {
      vi: "Tôi biến những quy trình vận hành phức tạp thành công cụ mà mọi người thực sự sử dụng.",
      en: "I turn complex operations into tools people actually use."
    },
    summary: [
      {
        vi: "Hơn 9 năm cải tiến quy trình, triển khai chuyển đổi số và dẫn dắt các dự án liên phòng ban. Tôi đóng vai trò cầu nối giữa nhu cầu kinh doanh và giải pháp công nghệ.",
        en: "9+ years improving processes, delivering digital transformation and leading cross-functional projects. I bridge the gap between business needs and technology solutions."
      },
      {
        vi: "Tôi bắt đầu bằng việc quan sát cách mọi người đang làm việc, xác định vấn đề thật sự nằm ở đâu, rồi mới xem công nghệ giúp được gì. Phong cách của tôi: thực tế, có cấu trúc, tập trung vào khả năng triển khai.",
        en: "I start by observing how people actually work and finding where the real problem is — only then do I ask how technology can help. My style is practical, structured and focused on getting things delivered."
      }
    ],
    /* DỮ LIỆU GIẢ LẬP — thay bằng thông tin thật / PLACEHOLDER — replace with real info */
    email: "minhanh.demo@example.com",
    linkedin: "https://linkedin.com/in/minhanh-demo",
    cv: "assets/CV_Nguyen_Minh_Anh.pdf",
    photo: "assets/img/avatar.jpg",
    photoAlt: { vi: "Chân dung Nguyễn Minh Anh", en: "Portrait of Nguyen Minh Anh" }
  },

  /* ---------- Con số nổi bật / Key numbers ----------
     num: số đếm (animated) · text: hiển thị cố định (nếu không có num) */
  stats: [
    { num: 9,   suffix: "+", label: { vi: "năm kinh nghiệm Operations & Digital Transformation", en: "years in Operations & Digital Transformation" } },
    { num: 15,  suffix: "+", label: { vi: "dự án cải tiến quy trình & chuyển đổi số", en: "process-improvement & digital transformation projects" } },
    { num: 20,  suffix: "+", label: { vi: "quy trình vận hành được chuẩn hóa", en: "operating procedures standardized" } },
    { num: 12,  suffix: "h", label: { vi: "báo cáo thủ công tiết kiệm mỗi tuần", en: "of manual reporting saved every week" } },
    { text: "3 → 1,5", textEn: "3 → 1.5", unit: { vi: "ngày", en: "days" }, label: { vi: "thời gian xử lý yêu cầu mua hàng trung bình", en: "average purchase-request processing time" } },
    { num: 150, suffix: "+", label: { vi: "yêu cầu mỗi tháng được quản lý trên workflow số", en: "requests a month managed on the digital workflow" } },
    { num: 180, suffix: "+", label: { vi: "nhân viên sử dụng hệ thống request nội bộ", en: "employees using the internal request system" } },
    { num: 85,  suffix: "%", label: { vi: "adoption công cụ mới sau 2 tháng", en: "adoption of the new tool after 2 months" } }
  ],

  /* ---------- 3 nguyên tắc / Principles ---------- */
  principles: [
    {
      title: "Simplify before digitize",
      text: {
        vi: "Không nên số hóa một quy trình phức tạp khi chưa xem có thể đơn giản hóa nó trước hay không.",
        en: "Never digitize a complicated process before asking whether it can be simplified first."
      }
    },
    {
      title: "Data should support decisions",
      text: {
        vi: "Dashboard không chỉ có nhiều biểu đồ. Người dùng phải hiểu họ cần làm gì khi nhìn thấy dữ liệu.",
        en: "A dashboard is more than a pile of charts. Viewers should know what to do when they see the data."
      }
    },
    {
      title: "Adoption is part of the project",
      text: {
        vi: "Dự án không kết thúc khi go-live. Người dùng thực sự dùng được công cụ mới mới là một phần của kết quả.",
        en: "A project doesn't end at go-live. People actually using the new tool is part of the result."
      }
    }
  ],

  /* ---------- Dự án / Projects ---------- */
  projects: [
    {
      id: "purchase-request",
      title: { vi: "Digital Purchase Request Workflow", en: "Digital Purchase Request Workflow" },
      period: "03/2024 – 07/2024",
      role: { vi: "Project Lead", en: "Project Lead" },
      company: "NovaRetail Group",
      image: "assets/img/project-purchase-request.jpg",
      imageAlt: { vi: "Giao diện workflow yêu cầu mua hàng", en: "Purchase request workflow interface" },
      metric: { text: "3 → 1,5", textEn: "3 → 1.5", unit: { vi: "ngày xử lý", en: "days to process" } },
      summary: {
        vi: "Chuyển quy trình mua hàng nội bộ từ email + Excel sang một workflow tập trung, theo dõi trạng thái theo thời gian thực.",
        en: "Moved internal purchasing from email + Excel to a single workflow with real-time status tracking."
      },
      context: {
        vi: "Quy trình yêu cầu mua hàng nội bộ dùng email, file Excel và nhiều bước xác nhận thủ công. Nhân viên gửi yêu cầu qua email, quản lý xác nhận, Finance kiểm tra ngân sách, Procurement xử lý. Thông tin nằm ở nhiều nơi nên người gửi khó biết yêu cầu đang ở bước nào.",
        en: "Internal purchase requests ran on email, Excel files and many manual approvals. Staff emailed a request, a manager approved, Finance checked budget and Procurement processed it. With information scattered everywhere, requesters couldn't tell which step their request was at."
      },
      problems: [
        { vi: "Thông tin yêu cầu không thống nhất.", en: "Request information was inconsistent." },
        { vi: "Thiếu dữ liệu khi gửi request.", en: "Requests were submitted with missing data." },
        { vi: "Nhiều email trao đổi qua lại.", en: "Long back-and-forth email threads." },
        { vi: "Khó kiểm tra trạng thái request.", en: "Hard to check a request's status." },
        { vi: "Không có dashboard tổng hợp; báo cáo làm thủ công.", en: "No overview dashboard; reports were built by hand." }
      ],
      roleList: [
        { vi: "Phỏng vấn người dùng từ Operations, Finance và Procurement.", en: "Interviewed users across Operations, Finance and Procurement." },
        { vi: "Mapping toàn bộ quy trình hiện tại và xác định các điểm nghẽn.", en: "Mapped the end-to-end current process and pinpointed bottlenecks." },
        { vi: "Thiết kế workflow mới và xây dựng requirement cho hệ thống.", en: "Designed the new workflow and wrote the system requirements." },
        { vi: "Làm việc với vendor triển khai, điều phối UAT.", en: "Worked with the implementation vendor and coordinated UAT." },
        { vi: "Viết tài liệu hướng dẫn và theo dõi adoption sau launch.", en: "Wrote user guides and tracked adoption after launch." }
      ],
      solutionTitle: { vi: "Giải pháp", en: "Solution" },
      solutionList: [
        { vi: "Nhân viên tạo request trên một biểu mẫu thống nhất.", en: "Staff create a request in one standard form." },
        { vi: "Manager phê duyệt.", en: "Manager approves." },
        { vi: "Finance kiểm tra ngân sách.", en: "Finance checks the budget." },
        { vi: "Procurement xử lý.", en: "Procurement fulfils it." },
        { vi: "Người gửi theo dõi trạng thái ngay trong dashboard.", en: "Requesters follow the status in the dashboard." }
      ],
      results: [
        { vi: "Giảm thời gian xử lý trung bình từ khoảng 3 ngày xuống 1,5 ngày.", en: "Cut average processing time from about 3 days to 1.5 days." },
        { vi: "Giảm khoảng 40% email trao đổi liên quan đến việc hỏi trạng thái.", en: "About 40% fewer status-check emails." },
        { vi: "Hơn 150 request/tháng được quản lý trên hệ thống.", en: "150+ requests a month managed on the system." },
        { vi: "Quản lý có dashboard theo dõi request đang chờ duyệt; Finance xuất báo cáo theo phòng ban và loại chi phí.", en: "Managers get a pending-approval dashboard; Finance exports reports by department and cost type." }
      ],
      skills: ["Process Mapping", "Requirement Gathering", "Stakeholder Management", "Project Management", "Workflow Design", "Change Management"]
    },
    {
      id: "ops-dashboard",
      title: { vi: "Operations Performance Dashboard", en: "Operations Performance Dashboard" },
      period: "08/2023 – 12/2023",
      role: { vi: "Project Manager & Dashboard Designer", en: "Project Manager & Dashboard Designer" },
      company: "NovaRetail Group",
      image: "assets/img/project-dashboard.jpg",
      imageAlt: { vi: "Dashboard hiệu suất vận hành của 40+ cửa hàng", en: "Operations performance dashboard for 40+ stores" },
      metric: { text: "−12", unit: { vi: "giờ báo cáo/tuần", en: "reporting hrs/week" } },
      summary: {
        vi: "Một dashboard chung cho hơn 40 cửa hàng, thay cho hàng loạt file Excel riêng lẻ.",
        en: "One shared dashboard for 40+ stores, replacing a pile of separate Excel files."
      },
      context: {
        vi: "Ban quản lý nhận báo cáo từ hơn 40 cửa hàng dưới nhiều file khác nhau. Team Operations mất nhiều thời gian tổng hợp trước cuộc họp tuần.",
        en: "Management received reports from 40+ stores in many different files, and the Operations team spent hours consolidating them before each weekly meeting."
      },
      problems: [
        { vi: "Dữ liệu phân tán, format của các cửa hàng không thống nhất.", en: "Scattered data, with every store using a different format." },
        { vi: "Khó so sánh hiệu quả giữa các cửa hàng.", en: "Hard to compare store performance." },
        { vi: "Quản lý nhận thông tin chậm.", en: "Management got information late." },
        { vi: "Nhiều thời gian dành cho việc tạo báo cáo thay vì phân tích.", en: "More time spent building reports than analyzing them." }
      ],
      goal: {
        vi: "Tạo một dashboard chung để quản lý theo dõi hiệu suất hệ thống mà không phải đọc nhiều bảng Excel riêng.",
        en: "Build one shared dashboard so managers can track system performance without reading many separate spreadsheets."
      },
      roleList: [
        { vi: "Làm việc với Store Operations để thống nhất KPI.", en: "Aligned KPIs with Store Operations." },
        { vi: "Chuẩn hóa cấu trúc dữ liệu đầu vào.", en: "Standardized the input data structure." },
        { vi: "Thiết kế wireframe và làm prototype; thu thập feedback và điều chỉnh.", en: "Designed wireframes and a prototype; gathered feedback and iterated." },
        { vi: "Viết hướng dẫn sử dụng và training cho đội quản lý.", en: "Wrote the user guide and trained the management team." }
      ],
      solutionTitle: { vi: "Dashboard gồm", en: "The dashboard covers" },
      solutionList: [
        { vi: "Doanh thu, số giao dịch, giá trị giao dịch trung bình.", en: "Revenue, transactions, average transaction value." },
        { vi: "Chi phí vận hành, tỷ lệ thiếu hàng.", en: "Operating cost, out-of-stock rate." },
        { vi: "Phản hồi khách hàng.", en: "Customer feedback." },
        { vi: "Hiệu quả theo cửa hàng và xu hướng theo tuần/tháng.", en: "Store-level performance and weekly/monthly trends." }
      ],
      results: [
        { vi: "Giảm khoảng 12 giờ làm báo cáo thủ công mỗi tuần.", en: "About 12 hours of manual reporting saved each week." },
        { vi: "Giảm số lượng file báo cáo riêng cần theo dõi.", en: "Far fewer separate report files to track." },
        { vi: "Ban quản lý phát hiện cửa hàng bất thường nhanh hơn.", en: "Management spots underperforming stores faster." },
        { vi: "Dashboard trở thành tài liệu chính trong cuộc họp Operations hằng tuần.", en: "The dashboard became the core document of the weekly Operations meeting." }
      ],
      skills: ["Dashboard Design", "KPI Definition", "Data Standardization", "Prototyping", "User Training"],
      tools: ["Google Sheets", "Looker Studio", "Excel"]
    },
    {
      id: "sop",
      title: { vi: "Store Operations SOP Standardization", en: "Store Operations SOP Standardization" },
      period: "02/2023 – 06/2023",
      role: { vi: "Process Improvement Lead", en: "Process Improvement Lead" },
      company: "NovaRetail Group",
      image: "assets/img/project-sop.jpg",
      imageAlt: { vi: "Thư viện SOP chuẩn hóa cho cửa hàng", en: "Standardized SOP library for stores" },
      metric: { text: "20+", unit: { vi: "SOP chuẩn hóa", en: "SOPs standardized" } },
      summary: {
        vi: "Chuẩn hóa hơn 20 quy trình để các cửa hàng cùng hệ thống làm việc theo một cách thống nhất.",
        en: "Standardized 20+ procedures so stores in one network work the same way."
      },
      context: {
        vi: "Các cửa hàng thực hiện một số quy trình theo những cách khác nhau dù thuộc cùng một hệ thống. Phạm vi: hơn 20 quy trình như opening/closing store, kiểm kê, nhận hàng, báo cáo sự cố, bàn giao ca, báo cáo doanh số ngày và xử lý khiếu nại khách hàng.",
        en: "Stores in the same network handled several procedures in different ways. Scope: 20+ procedures including opening/closing, inventory checks, product receiving, incident reporting, shift handover, daily sales reporting and customer complaint handling."
      },
      roleList: [],
      solutionTitle: { vi: "Cách thực hiện", en: "How it was done" },
      solutionList: [
        { vi: "Quan sát hoạt động tại cửa hàng và phỏng vấn Store Manager.", en: "Observed stores and interviewed Store Managers." },
        { vi: "Mapping quy trình hiện tại; xác định các bước trùng hoặc không cần thiết.", en: "Mapped current processes; found duplicate or unnecessary steps." },
        { vi: "Thiết kế quy trình chuẩn.", en: "Designed the standard process." },
        { vi: "Pilot tại 5 cửa hàng, thu thập feedback và điều chỉnh.", en: "Piloted in 5 stores, gathered feedback and adjusted." },
        { vi: "Rollout toàn hệ thống.", en: "Rolled out network-wide." }
      ],
      results: [
        { vi: "Chuẩn hóa hơn 20 SOP.", en: "20+ SOPs standardized." },
        { vi: "Giảm sự khác biệt trong cách xử lý giữa các cửa hàng.", en: "Less variation in how stores handle the same situation." },
        { vi: "Tạo thư viện SOP tập trung và checklist đơn giản dùng ngay trong ca làm.", en: "Built a central SOP library and simple on-shift checklists." },
        { vi: "Store Manager có nguồn tài liệu chung khi đào tạo nhân viên mới.", en: "Store Managers have one shared source for onboarding new staff." }
      ],
      skills: ["Process Improvement", "SOP Development", "Field Observation", "Pilot & Rollout", "Stakeholder Interviews"]
    },
    {
      id: "ai-pilot",
      title: { vi: "Internal AI Productivity Pilot", en: "Internal AI Productivity Pilot" },
      period: "01/2025 – 04/2025",
      role: { vi: "Project Lead", en: "Project Lead" },
      company: "NovaRetail Group",
      image: "assets/img/project-ai-pilot.jpg",
      imageAlt: { vi: "Chương trình thử nghiệm AI cho nhân viên văn phòng", en: "AI productivity pilot for office staff" },
      metric: { text: "18/25", unit: { vi: "tiếp tục dùng AI", en: "kept using AI" } },
      summary: {
        vi: "Thử nghiệm Generative AI với 25 nhân viên từ 5 phòng ban để giảm thời gian cho các công việc lặp lại.",
        en: "Piloted Generative AI with 25 employees from 5 departments to cut time on repetitive work."
      },
      context: {
        vi: "Thử nghiệm dùng Generative AI để giảm thời gian xử lý các công việc lặp lại của nhân viên văn phòng. Nhóm tham gia gồm 25 người từ Marketing, HR, Operations, Finance và Business Development.",
        en: "A trial of Generative AI to reduce the time office staff spend on repetitive tasks. 25 participants from Marketing, HR, Operations, Finance and Business Development took part."
      },
      roleList: [
        { vi: "Thu thập use case; phân loại nhiệm vụ phù hợp và không phù hợp với AI.", en: "Collected use cases; sorted tasks into suitable and unsuitable for AI." },
        { vi: "Thiết kế hướng dẫn sử dụng và tổ chức workshop.", en: "Designed usage guides and ran workshops." },
        { vi: "Theo dõi thử nghiệm và thu thập feedback.", en: "Tracked the pilot and collected feedback." },
        { vi: "Xây dựng bộ guideline sử dụng AI có trách nhiệm.", en: "Wrote the responsible-AI usage guidelines." }
      ],
      solutionTitle: { vi: "Use case thử nghiệm", en: "Use cases tested" },
      solutionList: [
        { vi: "Tóm tắt báo cáo, viết email, chuẩn bị meeting notes.", en: "Summarizing reports, writing emails, preparing meeting notes." },
        { vi: "Phân tích phản hồi khách hàng, chuẩn hóa nội dung báo cáo.", en: "Analyzing customer feedback, standardizing report content." },
        { vi: "Research ban đầu, tạo draft SOP, xử lý dữ liệu đơn giản.", en: "Initial research, drafting SOPs, simple data handling." }
      ],
      results: [
        { vi: "18/25 người tham gia tiếp tục dùng AI ít nhất vài lần mỗi tuần.", en: "18 of 25 participants kept using AI at least a few times a week." },
        { vi: "Một số tác vụ soạn thảo và tổng hợp thông tin giảm đáng kể thời gian.", en: "Several drafting and summarizing tasks got noticeably faster." },
        { vi: "Xác định 12 use case phù hợp để triển khai rộng hơn.", en: "Identified 12 use cases ready for wider rollout." },
        { vi: "Tạo bộ AI Usage Guidelines và xác định các loại dữ liệu không nên đưa vào công cụ AI công cộng.", en: "Created AI Usage Guidelines and defined which data must never go into public AI tools." }
      ],
      skills: ["AI Adoption", "Change Management", "Workshop Facilitation", "Process Design", "Responsible AI"]
    }
  ],

  /* ---------- Kinh nghiệm / Experience ---------- */
  experience: [
    {
      role: { vi: "Digital Transformation & Operations Manager", en: "Digital Transformation & Operations Manager" },
      company: "NovaRetail Group",
      kind: { vi: "Bán lẻ · hơn 40 cửa hàng", en: "Retail · 40+ stores" },
      period: { vi: "01/2022 – Hiện tại", en: "01/2022 – Present" },
      scope: {
        vi: "Phụ trách các sáng kiến cải tiến vận hành và chuyển đổi số; quản lý roadmap chuyển đổi số và danh sách dự án ưu tiên.",
        en: "Owns operations-improvement and digital transformation initiatives; manages the transformation roadmap and priority project list."
      },
      highlights: [
        { vi: "Dẫn dắt số hóa quy trình yêu cầu mua hàng, giảm thời gian xử lý từ ~3 ngày xuống 1,5 ngày.", en: "Led the purchase-request digitization, cutting processing time from ~3 days to 1.5 days." },
        { vi: "Xây dựng hệ thống dashboard quản trị vận hành, giảm ~12 giờ tổng hợp báo cáo mỗi tuần.", en: "Built the operations dashboard system, saving ~12 hours of weekly reporting." },
        { vi: "Chuẩn hóa hơn 20 quy trình vận hành giữa các cửa hàng.", en: "Standardized 20+ operating procedures across stores." },
        { vi: "Triển khai hệ thống quản lý task và request nội bộ cho hơn 180 người dùng.", en: "Rolled out an internal task and request system to 180+ users." },
        { vi: "Thiết kế chương trình onboarding công cụ mới, đạt ~85% người dùng chủ động sử dụng sau 2 tháng.", en: "Designed the new-tool onboarding program, reaching ~85% active use after 2 months." },
        { vi: "Cùng Finance và Operations tự động hóa một phần quy trình tổng hợp báo cáo chi phí hằng tháng.", en: "Partnered with Finance and Operations to automate part of monthly cost reporting." }
      ]
    },
    {
      role: { vi: "Senior Business Operations Specialist", en: "Senior Business Operations Specialist" },
      company: "BrightBite Foods",
      kind: { vi: "F&B · chuỗi cửa hàng", en: "F&B · store chain" },
      period: { vi: "06/2018 – 12/2021", en: "06/2018 – 12/2021" },
      scope: {
        vi: "Phân tích hoạt động kinh doanh, báo cáo quản trị và các dự án cải tiến quy trình cho chuỗi F&B.",
        en: "Business analysis, management reporting and process-improvement projects for an F&B chain."
      },
      highlights: [
        { vi: "Dashboard tổng hợp dữ liệu từ 25 cửa hàng, giảm ~60% thời gian tạo báo cáo tháng.", en: "Built a 25-store consolidated dashboard, cutting monthly reporting time by ~60%." },
        { vi: "Chuẩn hóa hệ thống báo cáo từ hơn 10 file riêng lẻ thành một bộ báo cáo thống nhất.", en: "Unified 10+ separate files into a single reporting suite." },
        { vi: "Phân tích dữ liệu bán hàng, đề xuất điều chỉnh lịch nhân sự cho nhóm cửa hàng có lưu lượng khách không ổn định.", en: "Analyzed sales data and proposed staffing-schedule changes for stores with unstable footfall." },
        { vi: "Thiết kế bộ KPI dashboard cho đội Store Operations.", en: "Designed the KPI dashboard set for Store Operations." }
      ]
    },
    {
      role: { vi: "Operations Executive", en: "Operations Executive" },
      company: "UrbanLink Services",
      kind: { vi: "Dịch vụ", en: "Services" },
      period: { vi: "07/2015 – 05/2018", en: "07/2015 – 05/2018" },
      scope: {
        vi: "Quản lý dữ liệu vận hành, báo cáo tuần, theo dõi yêu cầu khách hàng và phối hợp giữa Sales và Operations.",
        en: "Managed operations data and weekly reports, tracked customer requests and coordinated Sales and Operations."
      },
      highlights: [
        { vi: "Thiết kế tracker yêu cầu khách hàng giúp kiểm soát tốt hơn các yêu cầu quá hạn.", en: "Designed a customer-request tracker that improved control of overdue requests." },
        { vi: "Chuẩn hóa template báo cáo tuần; xây dựng checklist bàn giao Sales → Operations.", en: "Standardized the weekly report template; built a Sales → Operations handover checklist." },
        { vi: "Tham gia chuyển một số biểu mẫu giấy sang biểu mẫu điện tử.", en: "Helped move several paper forms to electronic forms." }
      ]
    }
  ],

  education: {
    degree: { vi: "Cử nhân Quản trị Kinh doanh", en: "Bachelor of Business Administration" },
    school: "University of Economics Ho Chi Minh City",
    period: "2011 – 2015",
    note: {
      vi: "Quan tâm: Operations Management, Business Analytics, Project Management, Management Information Systems.",
      en: "Interests: Operations Management, Business Analytics, Project Management, Management Information Systems."
    }
  },

  certifications: [
    { name: "Google Data Analytics Certificate", year: "2023" },
    { name: "Project Management Foundations", year: "2022" },
    { name: "Lean Six Sigma Yellow Belt", year: "2021" },
    { name: "Microsoft Power BI Data Analyst Fundamentals", year: "2020" }
  ],

  /* ---------- Kỹ năng / Skills ---------- */
  skills: [
    { group: { vi: "Chuyển đổi số", en: "Digital Transformation" }, items: ["Process Digitalization", "Digital Transformation Roadmap", "Workflow Design", "Technology Adoption", "Change Management"] },
    { group: { vi: "Vận hành", en: "Operations" }, items: ["Process Improvement", "SOP Development", "Operations Management", "Root Cause Analysis", "Continuous Improvement"] },
    { group: { vi: "Quản lý dự án", en: "Project Management" }, items: ["Project Planning", "Stakeholder Management", "Requirement Gathering", "Risk Management", "Vendor Coordination"] },
    { group: { vi: "Dữ liệu & báo cáo", en: "Data & Reporting" }, items: ["Excel", "Google Sheets", "Power BI", "Looker Studio", "Dashboard Design", "Data Visualization", "Management Reporting"] },
    { group: { vi: "Tự động hóa & AI", en: "Automation & AI" }, items: ["Workflow Automation", "Generative AI", "Claude", "ChatGPT", "Gemini", "No-code / Low-code", "Process Automation"] },
    { group: { vi: "Hợp tác", en: "Collaboration" }, items: ["Cross-functional Collaboration", "Workshop Facilitation", "Stakeholder Communication", "Training & User Adoption", "Executive Presentation"] }
  ],

  /* ---------- Nhận xét / Testimonials (DỮ LIỆU GIẢ LẬP) ---------- */
  testimonials: [
    {
      quote: {
        vi: "Minh Anh có khả năng rất tốt trong việc biến một vấn đề vận hành phức tạp thành một quy trình rõ ràng mà cả business và IT đều có thể hiểu. Trong các dự án cùng làm, Minh Anh luôn giữ được sự cân bằng giữa yêu cầu của người dùng và tính khả thi khi triển khai.",
        en: "Minh Anh is excellent at turning a complex operational problem into a clear process that both business and IT can understand. Across our projects, Minh Anh always balanced user requirements with what was feasible to deliver."
      },
      name: "Trần Hoàng Nam",
      role: "Head of Operations",
      company: "NovaRetail Group"
    },
    {
      quote: {
        vi: "Điểm mạnh nhất của Minh Anh không chỉ nằm ở việc triển khai công cụ mới mà ở việc giúp người dùng hiểu tại sao họ cần thay đổi cách làm việc. Điều này giúp các dự án có tỷ lệ adoption tốt hơn.",
        en: "Minh Anh's greatest strength isn't just rolling out new tools, it's helping people understand why they need to change how they work. That's what gives the projects better adoption."
      },
      name: "Phạm Thu Hà",
      role: "HR & Transformation Director",
      company: "NovaRetail Group"
    },
    {
      quote: {
        vi: "Minh Anh rất mạnh ở việc tổ chức thông tin và chuyển dữ liệu thành những dashboard mà quản lý thực sự sử dụng để ra quyết định.",
        en: "Minh Anh is very strong at organizing information and turning data into dashboards that managers genuinely use to make decisions."
      },
      name: "Nguyễn Thanh Long",
      role: "Former Operations Director",
      company: "BrightBite Foods"
    }
  ],

  /* ---------- Chủ đề, cơ hội, ngoài công việc ---------- */
  topics: ["Digital Transformation", "Future of Work", "Generative AI", "Process Improvement", "Business Operations", "Data Visualization", "Productivity", "Change Management"],
  opportunities: [
    { vi: "Digital Transformation", en: "Digital Transformation" },
    { vi: "Business Operations", en: "Business Operations" },
    { vi: "Transformation Project Management", en: "Transformation Project Management" },
    { vi: "Process Improvement", en: "Process Improvement" },
    { vi: "AI Adoption", en: "AI Adoption" },
    { vi: "Internal Productivity Tools", en: "Internal Productivity Tools" }
  ],
  beyondWork: {
    vi: "Tôi thích đọc sách về business và technology, thử các công cụ productivity mới và tham gia workshop về innovation. Cuối tuần, tôi đi hiking, chụp ảnh và tìm những quán cà phê mới.",
    en: "I enjoy reading about business and technology, trying new productivity tools and joining innovation workshops. On weekends I hike, take photos and hunt for new coffee shops."
  },

  /* ---------- Chữ giao diện / UI strings ---------- */
  ui: {
    nav: {
      about:      { vi: "Về tôi", en: "About" },
      projects:   { vi: "Dự án", en: "Projects" },
      experience: { vi: "Kinh nghiệm", en: "Experience" },
      skills:     { vi: "Kỹ năng", en: "Skills" },
      voices:     { vi: "Nhận xét", en: "Voices" },
      contact:    { vi: "Liên hệ", en: "Contact" }
    },
    skip: { vi: "Bỏ qua điều hướng", en: "Skip to content" },
    hero: {
      eyebrow:   { vi: "Portfolio", en: "Portfolio" },
      ctaProjects: { vi: "Xem dự án nổi bật", en: "See featured projects" },
      ctaLinkedin: { vi: "Kết nối LinkedIn", en: "Connect on LinkedIn" },
      ctaCv:       { vi: "Tải CV (PDF)", en: "Download CV (PDF)" }
    },
    statsTitle: { vi: "Kết quả đo được", en: "Measured results" },
    aboutTitle: { vi: "Cách tôi làm việc", en: "How I work" },
    aboutIntro: { vi: "Ba nguyên tắc tôi mang theo vào mọi dự án.", en: "Three principles I bring to every project." },
    projectsTitle: { vi: "Dự án nổi bật", en: "Featured projects" },
    projectsIntro: { vi: "Bốn dự án, từ vấn đề thật đến kết quả đo được.", en: "Four projects, from a real problem to a measured result." },
    viewCase: { vi: "Xem case study", en: "Read case study" },
    experienceTitle: { vi: "Kinh nghiệm", en: "Experience" },
    educationTitle: { vi: "Học vấn", en: "Education" },
    certsTitle: { vi: "Chứng chỉ", en: "Certifications" },
    skillsTitle: { vi: "Kỹ năng", en: "Skills" },
    voicesTitle: { vi: "Đồng nghiệp nói gì", en: "What colleagues say" },
    voicesNote: { vi: "Nhận xét là dữ liệu giả lập phục vụ bài tập.", en: "Testimonials are simulated data for this exercise." },
    interestsTitle: { vi: "Chủ đề tôi quan tâm", en: "What I care about" },
    opportunitiesTitle: { vi: "Cơ hội tôi muốn trao đổi", en: "Conversations I'd love to have" },
    beyondTitle: { vi: "Ngoài công việc", en: "Beyond work" },
    contactTitle: { vi: "Cùng trao đổi nhé", en: "Let's talk" },
    contactIntro: {
      vi: "Tôi sẵn sàng trao đổi về các dự án hoặc cơ hội hợp tác liên quan đến chuyển đổi số, tối ưu vận hành và ứng dụng AI trong công việc.",
      en: "I'm open to conversations about projects and collaborations in digital transformation, operations optimization and applying AI at work."
    },
    emailBtn: { vi: "Gửi email", en: "Send email" },
    copyBtn: { vi: "Sao chép email", en: "Copy email" },
    copied: { vi: "Đã sao chép!", en: "Copied!" },
    footerNote: {
      vi: "Tên công ty, đồng nghiệp, số liệu và thông tin liên hệ trong trang này là dữ liệu giả lập phục vụ bài tập.",
      en: "Company names, colleagues, figures and contact details on this page are simulated data for an exercise."
    },
    illustrative: { vi: "Hình minh họa", en: "Illustrative image" },
    case: {
      close:    { vi: "Đóng", en: "Close" },
      context:  { vi: "Bối cảnh", en: "Context" },
      problem:  { vi: "Vấn đề", en: "Problem" },
      goal:     { vi: "Mục tiêu", en: "Goal" },
      role:     { vi: "Vai trò của Minh Anh", en: "Minh Anh's role" },
      results:  { vi: "Kết quả", en: "Results" },
      skills:   { vi: "Kỹ năng", en: "Skills" },
      tools:    { vi: "Công cụ", en: "Tools" },
      prev:     { vi: "Dự án trước", en: "Previous" },
      next:     { vi: "Dự án sau", en: "Next" }
    },
    toTop: { vi: "Lên đầu trang", en: "Back to top" },
    langLabel: { vi: "Ngôn ngữ", en: "Language" },
    meta: {
      title: {
        vi: "Nguyễn Minh Anh — Digital Transformation & Operations Manager",
        en: "Nguyen Minh Anh — Digital Transformation & Operations Manager"
      },
      description: {
        vi: "Portfolio của Nguyễn Minh Anh: hơn 9 năm cải tiến quy trình, chuyển đổi số và ứng dụng AI trong vận hành. Dự án, kết quả đo được và cách làm việc.",
        en: "Portfolio of Nguyen Minh Anh: 9+ years of process improvement, digital transformation and AI adoption in operations. Projects, measured results and ways of working."
      }
    }
  }
};
