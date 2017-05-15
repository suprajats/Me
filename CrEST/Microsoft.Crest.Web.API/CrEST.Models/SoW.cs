﻿using System;
using System.Collections.Generic;

namespace Microsoft.Crest.Web.API.Models
{
    public partial class SoW
    {
        public SoW()
        {
            Application = new HashSet<Application>();
            Service = new HashSet<Service>();
            Slabase = new HashSet<Slabase>();
        }

        public int SoWid { get; set; }
        public int SupplierId { get; set; }
        public string Itorg { get; set; }
        public int? ContractId { get; set; }
        public DateTime? SoweffectiveDate { get; set; }
        public DateTime? SowexpirationDate { get; set; }
        public string Msowner { get; set; }
        public double? ServiceCatalogVersion { get; set; }
        public int? PonumYear1 { get; set; }
        public decimal? SowamountYear1 { get; set; }
        public decimal? SowamountYear2 { get; set; }
        public decimal? SowamountYear3 { get; set; }
        public decimal? SowamountYear4 { get; set; }
        public bool? IsCrest { get; set; }
        public string Remarks { get; set; }
        public int? CompanyCode { get; set; }
        public string Currency { get; set; }

        public virtual ICollection<Application> Application { get; set; }
        public virtual ICollection<Service> Service { get; set; }
        public virtual ICollection<Slabase> Slabase { get; set; }
        public virtual Supplier Supplier { get; set; }
    }
}
